'use strict'

const merge = require('webpack-merge')
const prodConfig = require('./prod.config')

module.exports = merge(prodConfig, {
  API_BASE_URL: '"http://localhost:3002/"'
})

