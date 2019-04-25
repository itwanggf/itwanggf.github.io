import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/hot',
      name:'hot',
      component:() => import('./views/Hot.vue')
    },
    {
      path:'/mv',
      name:'mv',
      component:() => import('./views/MV.vue')
    },
    {
      path:'/hellow',
      name:'hellow',
      component:() => import('./components/HelloWorld.vue')
    },
    {
      path:'/search',
      name:'search',
      component:() => import('./views/Search.vue')
    },
    {
      path:'/photo-detail',
      name:'photo-detail',
      component:() => import('./components/photo_detail.vue')
    }
  ]
})
