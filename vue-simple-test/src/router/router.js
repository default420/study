import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Chart from '../views/Chart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    }
  ]
})
