import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const isDev = process.env.NODE_ENV !== 'production';

// Development framing headers allowing doesitfit.lol
const DEV_CSP_FRAME_ANCESTORS = "frame-ancestors 'self' https://doesitfit.lol http://doesitfit.lol https://*.doesitfit.lol http://localhost:* http://127.0.0.1:*;";

const aldmcIdentityPlugin: Plugin = {
  name: 'aldmc-identity-marker',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/__aldmc_health') {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Private-Network', 'true');
        res.end(JSON.stringify({ app: 'aldmc-resume', status: 'ready', port: 5187 }));
        return;
      }

      // Development only: Allow framing by doesitfit.lol
      if (isDev) {
        // 1. Never send X-Frame-Options in development
        res.removeHeader('X-Frame-Options');

        // 2. Set Content-Security-Policy with frame-ancestors allowing doesitfit.lol
        res.setHeader('Content-Security-Policy', DEV_CSP_FRAME_ANCESTORS);

        // 3. Support Chrome Private Network Access (PNA) and CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Private-Network', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD');
        res.setHeader('Access-Control-Allow-Headers', '*');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }
      }

      res.setHeader('X-Application-Id', 'aldmc-resume');
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/__aldmc_health') {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Private-Network', 'true');
        res.end(JSON.stringify({ app: 'aldmc-resume', status: 'ready', mode: 'preview', port: 5187 }));
        return;
      }

      if (isDev) {
        res.removeHeader('X-Frame-Options');
        res.setHeader('Content-Security-Policy', DEV_CSP_FRAME_ANCESTORS);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Private-Network', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD');
        res.setHeader('Access-Control-Allow-Headers', '*');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }
      }

      res.setHeader('X-Application-Id', 'aldmc-resume');
      next();
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), aldmcIdentityPlugin],
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-three': ['three'],
          'vendor-gsap': ['gsap'],
          'vendor-motion': ['framer-motion', 'lenis'],
          'vendor-icons': ['lucide-react']
        }
      }
    }
  },
  server: {
    // host: true binds to 0.0.0.0, resolving both localhost (IPv4/IPv6) and 127.0.0.1
    host: true,
    port: 5187,
    strictPort: true,
    open: false,
    hmr: true,
    cors: true,
    headers: isDev
      ? {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Private-Network': 'true',
          'Content-Security-Policy': DEV_CSP_FRAME_ANCESTORS
        }
      : undefined
  },
  preview: {
    host: true,
    port: 5187,
    strictPort: true,
    open: false,
    cors: true,
    headers: isDev
      ? {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Private-Network': 'true',
          'Content-Security-Policy': DEV_CSP_FRAME_ANCESTORS
        }
      : undefined
  }
});
