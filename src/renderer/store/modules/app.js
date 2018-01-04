import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: false,
    hidden: false,
    shrinked: false,
    popup: false,
  },
  effect: {
    translate3d: true
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_SIDEBAR_VISIBLE] (state, config) {
    if (state.device.isMobile && config.hasOwnProperty('opened')) {
      state.sidebar.opened = config.opened
    } else {
      state.sidebar.opened = true
    }

    if (config.hasOwnProperty('hidden')) {
      state.sidebar.hidden = config.hidden
    }
  },

  [types.TOGGLE_SIDEBAR_EXPANDABLE] (state, config) {
    if (state.device.isMobile) {
      state.sidebar.shrinked = false
    } else {
      state.sidebar.shrinked = config.hasOwnProperty('shrinked') && config.shrinked
    }
  },

  [types.TOGGLE_SIDEBAR_POPUP] (state, config) {
    if (state.device.isMobile) {
      state.sidebar.popup = false
    } else {
      state.sidebar.popup = config.hasOwnProperty('popup') && config.popup
      console.log('TOGGLE_SIDEBAR_POPUP:', state.sidebar.popup)
    }
  },

  [types.SWITCH_EFFECT] (state, effectItem) {
    for (let name in effectItem) {
      state.effect[name] = effectItem[name]
    }
  }
}

export default {
  state,
  mutations
}
