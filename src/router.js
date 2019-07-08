import Vue from 'vue'
// import Router from 'vue-router'
import Home from './views/Home.vue'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)
// Vue.use(Router)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Post.vue'), 
      props: true
    }
  ]
})
