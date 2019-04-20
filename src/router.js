import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Race from './views/Race.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'font-bold',
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
