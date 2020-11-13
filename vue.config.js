module.exports = {
    publicPath: "./",
    outputDir: "dist",
    productionSourceMap: false,
    chainWebpack: config => {
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
    },
    devServer: {
      port: 82
    }
  }