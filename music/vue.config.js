module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: "dist",
    assetsDir: "assets",
    // indexPath: "myIndex.html",
    filenameHashing: false,
    lintOnSave: true,
    // lintOnSave: process.env.NODE_ENV !== 'production',
    // runtimeCompiler: false,
    productionSourceMap: false,
    devServer: {
      host: "localhost",
      port: 8080, // 端口号
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
   
      // 配置多个代理
      proxy: {
        "/api": {
          target: "<url>",
          ws: true,
          changeOrigin: true
        },
        "/foo": {
          target: "<other_url>"
        }
      }
    }
  };
  