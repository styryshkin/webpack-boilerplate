const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: path.join(__dirname, '/node_modules/')
        }]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
    ],
    target: "web",
    progress: true
};