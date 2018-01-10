'use strict'

const merge = require('webpack-merge')
const prodConfig = require('./prod.config')

module.exports = merge(prodConfig, {
  API_BASE_URL: '"http://sh.okertrip.com/"' // '"http://sh.okertrip.com/"', '"http://localhost:3002/"'
})

