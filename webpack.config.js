const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  console.log('Webpack env: ' + env)

  const prd = env === 'production'
  const config = {
    mode: prd ? 'production' : 'development',
    entry: __dirname + '/src/index',
    output: {
      path: __dirname + '/dist',
      filename: '[name].[contenthash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new WebpackNotifierPlugin({
        title: 'IMAGE-PERSPECTIVE',
        skipFirstNotification: true,
        alwaysNotify: false
      }),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false)
      }),
      new CopyWebpackPlugin(['src/assets']),
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'sw.js'
      })
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /node_modules/,
          include: /src/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[local]--[name].[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: { name: 'assets/[name].[hash].[ext]' }
            }
          ]
        }
      ]
    }
  }

  if (!prd) {
    config.devServer = {
      inline: true,
      port: 3334
    }

    config.devtool = 'source-map'
  }

  return config
}
