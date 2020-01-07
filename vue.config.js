
module.exports = {
  chainWebpack(config) {
    config.resolve.alias.delete("@")
    config.resolve.plugin("tsconfig-paths").use(require("tsconfig-paths-webpack-plugin"))

    const regex = /\.(vue|js|ts|svg)$/
    config.module.rule("svg").issuer(file => !regex.test(file))
    config.module
      .rule("svg-component")
      .test(/\.svg$/)
      .issuer(file => regex.test(file))
      .use("vue")
      .loader("vue-loader")
      .end()
      .use("svg-to-vue-component")
      .loader("svg-to-vue-component/loader")
  },
  outputDir: "dist/web",
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        config.plugin("define").tap(args => {
          args[0].IS_ELECTRON = true
          return args
        })
      },
      disableMainProcessTypescript: false,
      mainProcessFile: "src/electron/main.ts",
      mainProcessTypeChecking: true,
      mainProcessWatch: [
        "src/electron/ipc",
      ],
      nodeIntegration: true, // TODO fix that
      outputDir: "dist/app",
    },
  },
}
