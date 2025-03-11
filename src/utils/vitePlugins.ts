
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
          if (req.url?.includes('.')) {
            // Skip for assets
            return next();
          }
          
          // Check if this is an API request or a static file
          if (
            req.url?.startsWith('/api/') || 
            req.url?.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/)
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
