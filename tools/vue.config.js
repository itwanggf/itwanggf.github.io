// vue.config.js
module.exports = {
    // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath。
    // baseUrl:'./', 
    // 配置sub-path后访问路径为https://xxx-path/sub-path/#/
    publicPath: process.env.NODE_ENV === 'production' ? '/sub-path/' : '/',
    // 输出文件路径，默认为dist
    outputDir: 'dist',  
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: '', 
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: '',
    // 配置多页应用
    pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/subpage/main.js',
    },
    lintOnSave: true,  // 保存时 lint 代码
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // 自动注入全局变量样式
                data: `
                    @import "src/你的全局scss文件路径";
                `
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,
    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        port: 8080, // 配置端口
        open: true, // 自动开启浏览器
        compress: true, // 开启压缩
        // 设置让浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: true,
            errors: true
        },
        // 设置请求代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
}
