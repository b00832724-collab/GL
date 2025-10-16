import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/GL/',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  }
});
