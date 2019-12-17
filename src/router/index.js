import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
      // component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
