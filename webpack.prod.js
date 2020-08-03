const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { fileNames } = require('./build-settings');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: htmlWebpackPlugins(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
});

function htmlWebpackPlugins() {
  return fileNames.map(
    fileName =>
      new HtmlWebpackPlugin({
        filename: `${fileName}.html`,
        template: `./src/${fileName}.html`,
        inject: false,
      })
  );
}
