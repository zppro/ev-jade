import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import pkg from 'package'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

let styleSass = pkg.dependencies.bulma >= '0.6.0' ? '-bulma' : ''
console.log('<><<><><><>', styleSass)
// import(`./style${pkg.dependencies.bulma >= '0.6.0' ? '-bulma' : ''}.scss`)
