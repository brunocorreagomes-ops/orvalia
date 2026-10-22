import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => {
  return {
    base: '/',
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
      rollupOptions: {
        output: isSsrBuild ? {} : {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            animations: ['framer-motion', 'gsap', '@studio-freight/lenis'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
