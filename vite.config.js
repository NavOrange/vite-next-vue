import path from 'path'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

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
  rollupOutputOptions: {
    plugins: [
      getBabelOutputPlugin({
        configFile: path.resolve(__dirname, '.babelrc.json'),
      }),
    ],
  },
}
