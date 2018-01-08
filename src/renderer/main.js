import Vue from 'vue'
// import axios from 'axios'
import http from 'utils/http'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import { TOGGLE_SIDEBAR_VISIBLE } from './store/mutation-types'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = http

Vue.use(NProgress, {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
})

// Enable devtools
Vue.config.devtools = true

sync(store, router)

const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR_VISIBLE, false)
  }
  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  nprogress,
  template: '<App/>'
}).$mount('#app')
