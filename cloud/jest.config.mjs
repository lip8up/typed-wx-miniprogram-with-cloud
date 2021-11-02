import tsjestUtils from 'ts-jest/utils/index.js'
import fs from 'fs'
import { parse } from 'comment-json'

const { pathsToModuleNameMapper } = tsjestUtils

const tsconfig = parse(fs.readFileSync('./tests/tsconfig.json', 'utf8'))
const { compilerOptions: { paths: tsconfigPaths } } = tsconfig

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      tsconfigPaths,
      { prefix: '<rootDir>/' }
    )
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tests/tsconfig.json'
    }
  },

  setupFilesAfterEnv: ['jest-extended-global-fail-pass/setup'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/*.d.ts",
    "!src/functions/**/index.ts",
  ]
}
