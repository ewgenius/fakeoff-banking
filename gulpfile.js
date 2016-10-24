const path = require('path')
const gulp = require('gulp')
const util = require('gulp-util')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfigurer = require('./config/webpack.config')

const PORT = 8081

const webpackConfigDev = webpackConfigurer('development', PORT)
const webpackConfigProd = webpackConfigurer('production')

gulp.task('copy', () => {
  return gulp.src([
      `./index.html`,
      `./manifest.json`
    ])
    .pipe(gulp.dest('./build'))
})

gulp.task('assets', () => {
  return gulp.src(['./assets/**/*.png', './assets/**/*.ico', ])
    .pipe(gulp.dest(`./build/assets`))
})

gulp.task('webpack', cb => {
  webpack(webpackConfigProd, (err, stats) => {
    if (err) throw new util.PluginError('webpack', err)
    util.log('[webpack]', stats.toString())
    cb()
  })
})

gulp.task('serve', () => {
  const compiler = webpack(webpackConfigDev)

  const server = new WebpackDevServer(compiler, {
    contentBase: './build',
    hot: true,
    stats: {
      colors: true
    }
  })

  server.listen(PORT, 'localhost', err => {
    if (err) throw new util.PluginError('webpack-dev-server', err)
    util.log('[webpack-dev-server]', `http://localhost:${PORT}`)
  })
})

gulp.task('default', ['assets', 'copy', 'assets', 'serve'])

gulp.task('bundle', ['assets', 'copy', 'assets', 'webpack'])