
module.exports = {
  chainWebpack(config) {
    config.resolve.alias.delete("@")
    config.resolve.plugin("tsconfig-paths").use(require("tsconfig-paths-webpack-plugin"))
  },
  outputDir: "dist/web",
  pluginOptions: {
    electronBuilder: {
      outputDir: "dist/app",
    },
  },
}
