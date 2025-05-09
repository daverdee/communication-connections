
import { ViteDevServer } from 'vite';
import type { Connect } from 'vite';

// Custom plugin to handle SPA routing
export function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use((
          req: Connect.IncomingMessage, 
          res: any, 
          next: Connect.NextFunction
        ) => {
          // Skip if URL is undefined
          if (!req.url) {
            return next();
          }
          
          // Skip for assets, API requests, or static files
          if (
            req.url.includes('.') || 
            req.url.startsWith('/api/') || 
            req.url.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/)
          ) {
            return next();
          }
          
          // Rewrite all other requests to index.html
          req.url = '/index.html';
          next();
        });
      };
    }
  };
}
