const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')

module.exports = merge.smart({
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'server'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
}, {
  devtool: 'inline-source-map',
  entry: ['webpack/hot/poll?1000', path.join(__dirname, 'src/index.ts')],
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  stats: 'minimal',
  mode: 'development',
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  watch: true,
})
