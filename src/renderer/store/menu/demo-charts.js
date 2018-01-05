import lazyLoading from 'utils/lazyLoading'

export default {
  name: 'DemoCharts',
  path: '/demo-charts',
  meta: {
    label: '演示-图表',
    icon: 'fa-bar-chart-o',
    expanded: false
  },
  component: lazyLoading('demo-charts', true),

  children: [
    {
      name: 'Chartist',
      path: 'chartist',
      component: lazyLoading('demo-charts/Chartist')
    },
    {
      name: 'Chartjs',
      path: 'chartjs',
      component: lazyLoading('demo-charts/Chartjs')
    },
    {
      name: 'Peity',
      path: 'peity',
      component: lazyLoading('demo-charts/Peity')
    }
  ]
}
