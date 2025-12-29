import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from 'vite-plugin-prerender'
import path from 'path'
import { getAllRoutes } from './scripts/get-routes.js'

// https://vite.dev/config/
export default defineConfig(async () => {
  const routes = await getAllRoutes();

  return {
    plugins: [
      react(),
      prerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: routes,
        renderer: '@prerenderer/renderer-puppeteer',
        rendererOptions: {
          maxConcurrentRoutes: 1,
          renderAfterTime: 500,
        },
        postProcess(renderedRoute) {
          // Optional: Add any post-processing logic here
          renderedRoute.html = renderedRoute.html
            .replace(/http:\/\/localhost:\d+/g, 'https://montysjoint.com')
            .replace(/localhost:\d+/g, 'montysjoint.com');
          return renderedRoute;
        },
      }),
    ],
    build: {
      target: 'es2018',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code for better caching
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
    },
  }
})
