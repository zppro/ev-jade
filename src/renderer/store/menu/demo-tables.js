import lazyLoading from 'utils/lazyLoading'

export default {
  name: 'Tables',
  meta: {
    icon: 'fa-table',
    expanded: false
  },

  children: [
    {
      name: 'BasicTables',
      path: '/demo-tables/basic',
      meta: {
        label: 'Basic Tables'
      },
      component: lazyLoading('demo-tables/Basic')
    }
  ]
}
