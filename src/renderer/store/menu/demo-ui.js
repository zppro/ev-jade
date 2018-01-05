import lazyLoading from 'utils/lazyLoading'

export default {
  name: 'UI',
  meta: {
    label: 'UI Features',
    icon: 'fa-laptop',
    expanded: false
  },

  children: [
    {
      name: 'Buttons',
      path: '/demo-ui/buttons',
      component: lazyLoading('demo-ui/Buttons')
    },
    {
      name: 'Form',
      path: '/demo-ui/form',
      component: lazyLoading('demo-ui/Form')
    }
  ]
}
