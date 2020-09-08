import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Login from '../view/Login'
import Signup from '../view/Signup'
import Test from '../view/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
