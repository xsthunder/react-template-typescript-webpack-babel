
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root:process.cwd()
        }),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename:'[name].chunk.js',
        path: path.resolve('./dist'),
        publicPath: "/",
    },
}
