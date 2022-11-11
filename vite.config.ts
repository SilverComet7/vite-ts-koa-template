import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import checker from 'vite-plugin-checker';
import VueSetupNameExtend from 'vite-plugin-vue-setup-extend-plus';
// https://vitejs.dev/config/
export default defineConfig({
  root: 'view',
  publicDir: 'public',
  server: {
    port: 3001,
    strictPort: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
});
