
const { pathsToModuleNameMapper } = require("ts-jest/utils")
const { compilerOptions } = require("./tsconfig")

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
}
