import * as types from './mutation-types'

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
