#!/usr/bin/env node
import { execSync, spawn } from 'node:child_process';
import http from 'node:http';
import net from 'node:net';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const HOST = '127.0.0.1';
const PORT = 5187;
const TARGET_URL = `http://${HOST}:${PORT}/`;
const HEALTH_URL = `http://${HOST}:${PORT}/__aldmc_health`;
const APP_IDENTIFIER = 'aldmc-resume';

function openBrowser(url) {
  try {
    if (process.platform === 'win32') {
      execSync(`start "" "${url}"`, { windowsHide: true, stdio: 'ignore' });
    } else if (process.platform === 'darwin') {
      execSync(`open "${url}"`, { stdio: 'ignore' });
    } else {
      execSync(`xdg-open "${url}"`, { stdio: 'ignore' });
    }
    return true;
  } catch (err) {
    console.error(`[ALDMC] Note: Could not launch browser automatically: ${err.message}`);
    console.log(`[ALDMC] Please open the URL manually in your browser: ${url}`);
    return false;
  }
}

function probeHealth(timeoutMs = 1200) {
  return new Promise((resolve) => {
    const req = http.get(HEALTH_URL, { timeout: timeoutMs }, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data && data.app === APP_IDENTIFIER) {
            resolve({ status: 'ok', data });
            return;
          }
        } catch {
          // not json
        }
        const appIdHeader = res.headers['x-application-id'];
        if (appIdHeader === APP_IDENTIFIER) {
          resolve({ status: 'ok' });
          return;
        }
        resolve({ status: 'conflict', details: 'Unrecognized response on port 5187' });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 'unreachable' });
    });

    req.on('error', () => {
      resolve({ status: 'unreachable' });
    });
  });
}

function checkPortOccupied() {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(800);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      resolve(false);
    });
    socket.connect(PORT, HOST);
  });
}

async function startDevServer() {
  console.log(`[ALDMC] Starting development server on ${TARGET_URL} ...`);
  const viteBin = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');

  const child = spawn(process.execPath, [viteBin], {
    cwd: projectRoot,
    detached: true,
    stdio: 'ignore',
    windowsHide: true
  });

  child.unref();

  const startTime = Date.now();
  const maxWait = 15000;

  while (Date.now() - startTime < maxWait) {
    await new Promise((r) => setTimeout(r, 200));
    const health = await probeHealth(500);
    if (health.status === 'ok') {
      return true;
    }
    if (health.status === 'conflict') {
      console.error(`❌ [PORT CONFLICT] Port ${PORT} was claimed by an unrecognized application during startup.`);
      return false;
    }
  }

  console.error(`❌ [ALDMC] Timed out waiting for Vite server to become ready on ${TARGET_URL}.`);
  return false;
}

async function main() {
  const health = await probeHealth(1200);

  if (health.status === 'ok') {
    console.log(`✓ [ALDMC] ALDMC-Resume development server is already active on ${TARGET_URL}`);
    console.log(`[ALDMC] Reopening / focusing browser...`);
    openBrowser(TARGET_URL);
    process.exit(0);
  }

  const portInUse = await checkPortOccupied();
  if (portInUse) {
    console.error(`\n❌ [PORT CONFLICT DETECTED]`);
    console.error(`Port ${PORT} on ${HOST} is currently in use by an unrecognized process or different project.`);
    console.error(`The ALDMC identity marker test at ${HEALTH_URL} did not pass.`);
    console.error(`To protect your workflow, ALDMC-Resume will NOT open an unrelated application.`);
    console.error(`\nPlease terminate the process using port ${PORT} or check running applications.\n`);
    process.exit(1);
  }

  const started = await startDevServer();
  if (!started) {
    process.exit(1);
  }

  console.log(`✓ [ALDMC] Server is ready on ${TARGET_URL}`);
  console.log(`[ALDMC] Launching default browser...`);
  openBrowser(TARGET_URL);
  process.exit(0);
}

main().catch((err) => {
  console.error(`[ALDMC] Unexpected error:`, err);
  process.exit(1);
});
