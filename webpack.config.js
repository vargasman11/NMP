const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const destinationPath = __dirname + '/web';

module.exports = {
    entry: './src/app.js',
    output: {
        path: destinationPath,
        filename: 'js/[name].js'
    },
    mode: "development",
    watch: true,
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            files: ['./templates/**/*.twig', './web/dist/css/*.css', './styles/SCSS/**/*.scss'],
            // server: { baseDir: ['public'] }
            proxy: 'http://localhost'
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
        ]
    },
    devtool: "source-map"
}