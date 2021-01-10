import path from 'path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import { babel } from '@rollup/plugin-babel'

export default defineConfig({
  alias: [
    {
      find: /^@\/(.*)/,
      replacement: `${path.resolve(__dirname, 'src')}/$1`,
    },
  ],
  plugins: [vuePlugin()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  build: {
    base: './',
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled',
        }),
      ],
    },
  },
})
