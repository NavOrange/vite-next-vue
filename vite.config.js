import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  alias: {
    '/src/': path.resolve(__dirname, 'src'),
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8080/',
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  rollupInputOptions: {
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
  },
}
