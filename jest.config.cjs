/** @type {import('ts-jest').JestConfigWithTsJest} */
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

// Make sure jest runs with UTC TZ (to avoid failed tests locally)
process.env.TZ = 'UTC'

const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  modulePaths: [compilerOptions.baseUrl],
  modulePathIgnorePatterns: ['<rootDir>/build/'],
}

module.exports = config
