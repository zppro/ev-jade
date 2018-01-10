import Vue from 'vue'
import Message from 'vue-bulma-message'
import * as types from './mutation-types'
import * as keys from './keys'

export const toggleSidebarVisible = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR_VISIBLE, config)
  }
}

export const toggleSidebarExpandable = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR_EXPANDABLE, config)
  }
}

export const toggleSidebarPopup = ({ commit }, { opened, top, children }) => {
  commit(types.TOGGLE_SIDEBAR_POPUP, { opened, top, children })
}

export const toggleDevice = ({ commit }, device) => commit(types.TOGGLE_DEVICE, device)

export const expandMenu = ({ commit }, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const switchEffect = ({ commit }, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}

export const loginSuccess = ({ commit, dispatch }, user) => {
  if (user) {
    commit(types.SET_USER, user)
    return dispatch('saveUserToLS')
  }
  return Promise.resolve(true)
}

export const saveUserToLS = ({ state }) => {
  console.log('saveUserToLS...', state.app.user)
  if (state.app.user) {
    window.localStorage.setItem(keys.LS_USER_KEY, JSON.stringify(state.app.user))
  }
}

export const removeUserFromLS = ({ state }) => {
  window.localStorage.removeItem(keys.LS_USER_KEY)
}

export const loadUserFromLS = async ({ commit, dispatch }) => {
  let userData = JSON.parse(window.localStorage.getItem(keys.LS_USER_KEY))
  let authed = false
  if (userData) {
    let valid = await dispatch('validateUserToken', userData)
    if (valid) {
      commit(types.SET_USER, userData)
      authed = true
    }
  }
  return Promise.resolve(authed)
}

export const clearUser = ({ commit, dispatch }) => {
  commit(types.SET_USER, null)
  dispatch('removeUserFromLS')
}

export const validateUserToken = async ({ commit }, {_id, token}) => {
  let userId = await Vue.http.post(`services/share/login/medical/validateToken`, {token})
  let valid = _id === userId
  return Promise.resolve(valid)
}

const MessageComponent = Vue.extend(Message)
export const alert = ({ commit }, propsData = { title: '', message: '', type: '', direction: '', duration: 3000, container: '.messages' }) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}
