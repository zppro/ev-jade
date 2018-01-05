import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from 'utils/lazyLoading'
import menu from '@/store/menu'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      meta: {
        label: '首页',
        icon: 'fa-home'
      },
      component: lazyLoading('Home')
    },
    {
      name: 'Login',
      path: '/login',
      meta: {
        label: '登录',
        icon: 'fa-sign-in'
      },
      component: lazyLoading('auth/Login')
    },
    ...generateRoutesFromMenu(menu.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
