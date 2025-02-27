import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/Pricing.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    }
  ]
})

export default router