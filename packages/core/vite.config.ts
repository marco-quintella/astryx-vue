import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';

const pandaCss = resolve(__dirname, 'styled-system/styles.css');
const distStylesPath = resolve(__dirname, 'dist/styles.css');

function copyPandaCss() {
  return {
    name: 'copy-panda-css',
    closeBundle() {
      if (!existsSync(pandaCss)) return;
      mkdirSync(resolve(__dirname, 'dist'), { recursive: true });
      copyFileSync(pandaCss, distStylesPath);
    },
  };
}

export default defineConfig({
  plugins: [vue(), copyPandaCss()],
  build: {
    target: 'es2022',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AstryxVue',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      external: ['vue', '@astryxdesign/vue-tokens'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.test.ts'],
  },
});
