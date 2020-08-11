import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  alias: {
    '/@src/': path.resolve(__dirname, 'src')
  },
  rollupInputOptions: {
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' })
    ]
  }
}
