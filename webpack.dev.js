const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    historyApiFallback: true, /* support for react-router  */
    contentBase: './dist',
  }, 
    plugins: [
        new Webpack.DefinePlugin({
            '__WAIMAI_ENV__':JSON.stringify('dev')
        })
    ]
});
