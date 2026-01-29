import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // 配置为传统script标签兼容的格式
    target: 'es2015',
    // 禁用代码分割，生成单一JS文件
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        // 确保生成UMD格式，可在script标签中直接使用
        format: 'iife',
        inlineDynamicImports: true
      }
    }
  }
});