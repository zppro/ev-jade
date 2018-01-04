import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'
import menu from './menu'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    menu,
    ...modules
  },
  actions,
  getters,
  state: {
    pkg
  },
  mutations: {
  }
})
