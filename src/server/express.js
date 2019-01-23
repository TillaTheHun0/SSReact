
import express from 'express'
import cookieParser from 'cookie-parser'
import expressStaticGzip from 'express-static-gzip'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import api from './api'

import { webpackCompiler, webpackConfig } from './webpack'

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
const PORT = process.env.PORT || 8080
let isBuilt = false

const done = () => { !isBuilt && console.log('Done') }

const compiler = webpackCompiler[process.env.NODE_ENV]

const server = express()
server.use(cookieParser())

server.listen(PORT, () => {
  isBuilt = true
  console.log(
    `Server listening on \x1b[42m\x1b[1mhttp://localhost:${PORT}\x1b[0m in \x1b[41m${
      process.env.NODE_ENV
    }\x1b[0m 🌎...`
  )
})

server.use('/api', api)

if (isDev) {
  const clientCompiler = compiler.compilers[0]

  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    webpackConfig.configDevClient.devServer
  )

  const webpackHotMiddlware = require('webpack-hot-middleware')(
    clientCompiler,
    webpackConfig.configDevClient.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  server.use(webpackHotServerMiddleware(compiler))

  console.log('Middleware enabled')
  done()
} else {
  compiler.run((uhoh, stats) => {
    const clientStats = stats.toJson().children[0]
    const render = require('../../build/prod-server-bundle.js').default
    console.log(
      stats.toString({
        colors: true
      })
    )
    server.use(
      expressStaticGzip('dist', {
        enableBrotli: true
      })
    )
    server.use(render({ clientStats }))
    done()
  })
}
