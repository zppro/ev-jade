'use strict'

// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  build: {
    config: require('./prod.config')
  },
  dev: {
    config: require('./dev.config')
  }
}