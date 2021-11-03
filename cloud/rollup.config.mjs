import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { globbySync } from 'globby'
import { join, resolve } from 'path'
import { createTransformerAndPlugin } from 'rollup-plugin-wx-cloud'
import pkg from './package.json'

const devDeps = Object.keys(pkg.devDependencies || {})
const deps = Object.keys(pkg.dependencies || {}).concat(devDeps)

const {
  wxCloudTransformer,
  wxCloudPlugin,
  outputDirectory
} = createTransformerAndPlugin({
  packageOptions: {
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    license: pkg.license
  },
  allDependencies: { ...pkg.devDependencies, ...pkg.dependencies },
  clientFilePath: resolve('../miniprogram/lib/cloud.ts')
})

/** @type {import('rollup').RollupOptions} */
const commonConfig = {
  external: (name, fpath) => /node_modules/.test(fpath || '') || deps.includes(name),
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: resolve('./tsconfig.json'),
      transformers: {
        before: [ wxCloudTransformer ]
      }
    }),
    wxCloudPlugin
  ]
}

const generateConfig = (
  /** @type {string} */functionDir,
  /** @type {string} */outputBaseDir
) => {
  const patterns = [
    join(functionDir, '*.ts'),
    join(functionDir, '*/index.ts')
  ]
  const list = globbySync(patterns)
  return list.map(fpath => {
    /** @type {import('rollup').RollupOptions} */
    const config = {
      input: {
        index: fpath
      },
      output: {
        dir: outputDirectory(outputBaseDir, fpath),
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      ...commonConfig
    }
    return config
  })
}

const config = generateConfig('src/functions', 'build')

export default config
