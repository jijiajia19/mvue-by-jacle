const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,

    //给资源文件起别名
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
    },
});
