import { nodeResolve } from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import packageJson from './package.json'

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: ['vue-demi'],
})

export default [
  bundle({
    plugins: [
      esbuild({ target: 'es2015' }),
      nodeResolve(),
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  }),
]
