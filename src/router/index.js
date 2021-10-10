import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'

import Register from '../views/Register.vue'

import ForgotPassword from '../views/ForgotPassword.vue'

import Chat from '../views/Chat.vue'

import LayoutA from '../layouts/LayoutA.vue'

import LayoutB from '../layouts/LayoutB.vue'


const routes = [
  {
    path: '/',
    component: LayoutA,
      children: [
        {
          path: '',
          component: Home
        }
      ]
  },

  {
    path: '/chat',
    component: LayoutA,
      children: [
        {
          path: '',
          component: Chat
        }
      ]
  },

  {
    path: '/login',
    component: LayoutB,
      children: [
        {
          path: '',
          component: Login
        }
      ]
  },

  {
    path: '/register',
    component: LayoutB,
      children: [
        {
          path: '',
          component: Register
        }
      ]
  },

  {
    path: '/forgot-password',
    component: LayoutB,
      children: [
        {
          path: '',
          component: ForgotPassword
        }
      ]
  },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   component: About
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
