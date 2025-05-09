
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
          try {
            // Skip if URL is undefined
            if (!req.url) {
              return next();
            }
            
            // Only handle GET requests for page routes
            if (req.method !== 'GET' || 
                req.url.includes('.') || 
                req.url.startsWith('/api/') || 
                req.url.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/)) {
              return next();
            }

            // Rewrite all other requests to index.html
            req.url = '/index.html';
            return next();
          } catch (error) {
            console.error('Error in SPA fallback plugin:', error);
            next();
          }
        });
      };
    }
  };
}
