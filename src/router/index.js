import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Login from '../view/Login'
import Signup from '../view/Signup'
import Profile from '../view/Profile'
import Test from '../view/Test'

import Tickets from '../view/ProfileItems/Tickets'
import Orders from '../view/ProfileItems/Orders'
import ZJPay from '../view/ProfileItems/ZJPay'
import PersonalInfo from '../view/ProfileItems/PersonalInfo'

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
    path: '/profile',
    component: Profile,
    redirect: '/tickets',
    children: [
      {
        path: '/tickets',
        component: Tickets
      },
      {
        path: '/orders',
        component: Orders
      },
      {
        path: '/zjpay',
        component: ZJPay
      },
      {
        path: '/personalinfo',
        component: PersonalInfo
      }
    ]
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
