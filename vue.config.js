/**
 * 配置参考: https://cli.vuejs.org/zh/config/
 */
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader");
    const urlRule = config.module.rule("url");
    urlRule.uses.clear();
    urlRule
      .test(/\.(xls|xlsx|json)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        esModule: false,
        limit: 10000,
        name: path.posix.join("static", "media/[name].[hash:7].[ext]"),
      });
  },
  productionSourceMap: false,
  devServer: {
    open: true,
    disableHostCheck: true,
    port: 3001,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          "element-ui": {
            name: "element-ui",
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            minSize: 0,
            minChunks: 1,
            reuseExistingChunk: true,
            chunks: "all",
          },
          vendor: {
            // 其他第三方库抽离
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数
            maxInitialRequests: 10,
            minSize: 0, // 大于0个字节
            priority: 90, // 权重
          },
          common: {
            // 公用模块抽离
            chunks: "all",
            test: /[\\/]src[\\/](.*)[\\.]js/,
            name: "common",
            minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数
            maxInitialRequests: 10,
            minSize: 0, // 大于0个字节
            priority: 80, // 权重
          },
          runtimeChunk: {
            name: "manifest",
          },
        },
      },
    },
  },
};
