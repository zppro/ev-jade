import lazyLoading from 'utils/lazyLoading'

export default {
  path: '/demo-components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: lazyLoading('demo-components', true),

  children: [
    {
      name: 'Components',
      path: '',
      component: lazyLoading('demo-components/Default')
    },
    {
      name: 'BackToTop',
      path: 'demo-components/backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump'
      },
      component: lazyLoading('demo-components/BackToTop')
    },
    {
      name: 'Brace',
      path: 'demo-components/brace',
      meta: {
        description: 'Code editor component that based on brace',
        repository: 'https://github.com/vue-bulma/brace'
      },
      component: lazyLoading('demo-components/Brace')
    },
    {
      name: 'Collapse',
      path: 'demo-components/collapse',
      meta: {
        description: 'Collapse component',
        repository: 'https://github.com/vue-bulma/collapse'
      },
      component: lazyLoading('demo-components/Collapse')
    },
    {
      name: 'Datepicker',
      path: 'demo-components/datepicker',
      meta: {
        description: 'Datepicker component is based on flatpickr',
        repository: 'https://github.com/vue-bulma/datepicker'
      },
      component: lazyLoading('demo-components/Datepicker')
    },
    {
      name: 'Message',
      path: 'demo-components/message',
      meta: {
        description: 'Message component',
        repository: 'https://github.com/vue-bulma/message',
        link: 'demo-components/Message.vue'
      },
      component: lazyLoading('demo-components/Message')
    },
    {
      name: 'Modal',
      path: 'demo-components/modal',
      meta: {
        description: 'Modal component',
        repository: 'https://github.com/vue-bulma/modal',
        link: 'demo-components/Modal.vue'
      },
      component: lazyLoading('demo-components/Modal')
    },
    {
      name: 'Notification',
      path: 'demo-components/notification',
      meta: {
        description: 'Notification component',
        repository: 'https://github.com/vue-bulma/notification',
        link: 'demo-components/Notification.vue'
      },
      component: lazyLoading('demo-components/Notification')
    },
    {
      name: 'ProgressBar',
      path: 'demo-components/progress-bar',
      meta: {
        description: 'ProgressBar component',
        repository: 'https://github.com/vue-bulma/progress-bar',
        link: 'demo-components/ProgressBar.vue'
      },
      component: lazyLoading('demo-components/ProgressBar')
    },
    {
      name: 'ProgressTracker',
      path: 'demo-components/progress-tracker',
      meta: {
        description: 'ProgressTracker component is based on progress-tracker',
        repository: 'https://github.com/vue-bulma/progress-tracker',
        link: 'demo-components/ProgressTracker.vue'
      },
      component: lazyLoading('demo-components/ProgressTracker')
    },
    {
      name: 'Quill',
      path: 'demo-components/quill',
      meta: {
        description: 'Your powerful, rich text editor',
        repository: 'https://github.com/vue-bulma/quill',
        link: 'demo-components/Quill.vue'
      },
      component: lazyLoading('demo-components/Quill')
    },
    {
      name: 'Rating',
      path: 'demo-components/rating',
      meta: {
        description: 'Rating component is based on starability.css',
        repository: 'https://github.com/vue-bulma/rating',
        link: 'demo-components/Rating.vue'
      },
      component: lazyLoading('demo-components/Rating')
    },
    {
      name: 'Slider',
      path: 'demo-components/slider',
      meta: {
        description: 'Slider component',
        repository: 'https://github.com/vue-bulma/slider',
        link: 'demo-components/Slider.vue'
      },
      component: lazyLoading('demo-components/Slider')
    },
    {
      name: 'Switch',
      path: 'demo-components/switch',
      meta: {
        description: 'Switch component',
        repository: 'https://github.com/vue-bulma/switch',
        link: 'components/Switch.vue'
      },
      component: lazyLoading('demo-components/Switch')
    },
    {
      name: 'Tabs',
      path: 'demo-components/tabs',
      meta: {
        description: 'Tabs component',
        repository: 'https://github.com/vue-bulma/tabs'
      },
      component: lazyLoading('demo-components/Tabs')
    },
    {
      name: 'Tooltip',
      path: 'demo-components/tooltip',
      meta: {
        description: 'Tooltip component is based on hint.css',
        repository: 'https://github.com/vue-bulma/tooltip'
      },
      component: lazyLoading('demo-components/Tooltip')
    },
    {
      name: 'Lory',
      path: 'demo-components/lory',
      meta: {
        description: 'Slider component is based on lory, lory: ☀ Touch enabled minimalistic slider',
        repository: 'https://github.com/vue-bulma/lory'
      },
      component: lazyLoading('demo-components/Lory')
    }
  ]
}
