const path = require('path')
const webpack = require('webpack')

module.exports = (env, port) => {
  const isDev = env === 'development'
  const PORT = port || 8081

  let plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity)
  ]

  if (isDev) {
    plugins = plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      })
    ])
  } else {
    plugins = plugins.concat([
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ])
  }

  return {
    entry: {
      app: (isDev ? [
        `webpack-dev-server/client?http://localhost:${PORT}/`,
        'webpack/hot/dev-server',
        path.join(__dirname, '../src/app.tsx')
      ] : [path.join(__dirname, '../src/app.tsx')]),
      vendor: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        'react-router',
        'immutable'
      ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, '../build')
    },
    module: {
      loaders: [{
        test: /\.tsx?$/,
        loader: 'ts'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.woff(2)?(\?v=.+)?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg|otf)(\?v=.+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?limit=8192'
      }]
    },
    resolve: {
      extensions: ['', '.ts', '.tsx', '.js', '.css', '.scss']
    },
    devtool: 'source-map',
    plugins
  }
}