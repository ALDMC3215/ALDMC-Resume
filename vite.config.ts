import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const aldmcIdentityPlugin: Plugin = {
  name: 'aldmc-identity-marker',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/__aldmc_health') {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(JSON.stringify({ app: 'aldmc-resume', status: 'ready', port: 5187 }));
        return;
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
        res.end(JSON.stringify({ app: 'aldmc-resume', status: 'ready', mode: 'preview', port: 5187 }));
        return;
      }
      res.setHeader('X-Application-Id', 'aldmc-resume');
      next();
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), aldmcIdentityPlugin],
  server: {
    host: '127.0.0.1',
    port: 5187,
    strictPort: true,
    open: false,
    hmr: true
  },
  preview: {
    host: '127.0.0.1',
    port: 5187,
    strictPort: true,
    open: false
  }
});

