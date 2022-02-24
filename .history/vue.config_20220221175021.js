const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
let BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    productionSourceMap: false,
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    devServer: {
        port: 8889,
        compress: true,
        historyApiFallback: true, //404返回主页
        hot: true,
        open: true,
        https: false, //是否使用https協議
        hotOnly: true, //是否開啟熱更新
        proxy: null,
    },
    chainWebpack: (config) => {
        // 修复HMR
        config.resolve.symlinks(true);

        //包大小分析工具
        /*  config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin) */

        /*
            config.resolve.alias // 添加别名
                .set("@", resolve("src"))
                .set("@assets", resolve("src/assets"))
                .set("@c", resolve("src/components"))
                .set("@views", resolve("src/views"))
                .set("@store", resolve("src/store"));
        */
    },
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                '@i': resolve('src/api'),
                '@c': resolve('src/components'),
                '@a': resolve('src/assets'),
                '@s': resolve('src/styles'),
                '@v': resolve('src/views'),
                '@u': resolve('src/utils'),
            },
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerPort: 8886,
                analyzerMode: 'static', //可选值有server static disabled
                generateStatsFile: false,
                statsOptions: { source: false },
                openAnalyzer: false,
            }),
        ],
    },
};
