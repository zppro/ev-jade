import * as types from '../mutation-types'
import lazyLoading from 'utils/lazyLoading'
import demoCharts from './demo-charts'
import demoUI from './demo-ui'
import demoComponents from './demo-components'
import demoTables from './demo-tables'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        label: '数字面板',
        icon: 'fa-tachometer'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'NurseStation',
      path: '/nurse-station',
      meta: {
        auth: true,
        label: '护士台',
        icon: 'fa-user-md'
      },
      component: lazyLoading('nurse-station', true)
    },
    {
      name: 'Axios',
      path: '/axiosDemo',
      meta: {
        auth: true,
        icon: 'fa-rocket'
      },
      component: lazyLoading('axios', true)
    },
    demoCharts,
    demoUI,
    demoComponents,
    demoTables
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
