import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'node24',
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.js'),
      external: ['express']
    }
  }
});
