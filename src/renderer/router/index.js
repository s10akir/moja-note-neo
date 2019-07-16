import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main-page',
      component: require('@/components/MainPage').default
    },
    {
      path: '/',
      name: 'welcome-page',
      component: require('@/components/WelcomePage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
