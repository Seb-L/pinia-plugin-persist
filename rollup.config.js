import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import packageJson from './package.json'

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  // external: (id) => !/^[./]/.test(id),
  external: ['vue', '@vue/composition-api'],
})

export default [
  bundle({
    plugins: [esbuild({
      target: 'es2015',
    })],
    output: [
      {
        file: `dist/${packageJson.name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `dist/${packageJson.name}.esm.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `dist/${packageJson.name}.d.ts`,
      format: 'es',
    },
  }),
]
