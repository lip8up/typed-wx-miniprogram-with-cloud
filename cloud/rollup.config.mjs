import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { globbySync } from 'globby'
import { join, resolve } from 'path'
import { createTransformerAndPlugin } from 'rollup-plugin-wx-cloud'
import pkg from './package.json'

const allDependencies = { ...pkg.devDependencies, ...pkg.dependencies }
const deps = Object.keys(allDependencies)

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
  allDependencies,
  clientFilePath: resolve('../miniprogram/lib/cloud.ts'),
  configFilePath: resolve('cloudbaserc.json'),
  functionDeploy: {
    context: {
      envVariables: {
        // 该变量并不能导致服务器使用 node --experimental-modules 运行你的函数，只是增加了一个普通的环境变量
        NODE_OPTIONS: '--experimental-modules'
      }
    },
    transfer: {
      timeout: 16
    }
  }
})

/** @type {import('rollup').RollupOptions} */
const commonConfig = {
  external: (name, fpath) => /node_modules/.test(fpath || '') || deps.includes(name),
  plugins: [
    nodeResolve({ preferBuiltins: true }),
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
