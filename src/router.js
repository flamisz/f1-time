import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Race from './views/Race.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'text-green-700 font-bold active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/race/:country',
      name: 'race',
      component: Race,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
