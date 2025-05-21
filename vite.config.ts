import ViteUi0Icon from '@randevo/icon-loader'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [
    ViteUi0Icon(),
    vue({
      include: [/^ui0-icon/],
      isProduction: true,
    }),
  ],
  build: {
    minify: true,

    // cssCodeSplit: true,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'randevo',
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
