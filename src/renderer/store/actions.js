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
    dispatch('saveUserToLS')
  }
}

export const saveUserToLS = ({commit, state}) => {
  if (state.user) {
    window.localStorage.setItem(keys.LS_USER_KEY, JSON.stringify(state.user))
  }
}

export const loadUserFromLS = ({ commit }) => {
  let user = JSON.parse(window.localStorage.getItem(keys.LS_USER_KEY))
  if (user) {
    commit(types.SET_USER, user)
  }
}

const MessageComponent = Vue.extend(Message)
export const alert = ({ commit }, propsData = { title: '', message: '', type: '', direction: '', duration: 3000, container: '.messages' }) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}
