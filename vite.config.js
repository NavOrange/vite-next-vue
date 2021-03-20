import path from 'path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { babel } from '@rollup/plugin-babel'

export default defineConfig({
  base: './',
  plugins: [vuePlugin(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /^@\/(.*)/,
        replacement: `${path.resolve(__dirname, 'src')}/$1`,
      },
    ],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  build: {
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled',
        }),
      ],
    },
  },
})
