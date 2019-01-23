
import webpack from 'webpack'
// webpack configs
import configDevClient from '../../config/webpack.dev-client.js'
import configDevServer from '../../config/webpack.dev-server.js'
import configProdClient from '../../config/webpack.prod-client.js'
import configProdServer from '../../config/webpack.prod-server.js'

export const webpackCompiler = {
  development: webpack([configDevClient, configDevServer]),
  production: webpack([configProdClient, configProdServer])
}

export const webpackConfig = {
  configDevClient,
  configDevServer,
  configProdClient,
  configProdServer
}
