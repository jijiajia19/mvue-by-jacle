const { defineConfig } = require('@vue/cli-service');
const resolve = dir => path.join(__dirname, dir);

module.exports = defineConfig({
    transpileDependencies: true, configureWebpack: {
        devtool: "source-map",
        resolve: {
            extensions: [".js", ".vue", ".json"],
            alias: {
                "@": resolve("src"),
                "@i": resolve("src/api"),
                "@c": resolve("src/components"),
                "@a": resolve("src/assets"),
                "@s": resolve("src/styles"),
                "@v": resolve("src/views"),
                "@u": resolve("src/utils")
            }
        },
});
