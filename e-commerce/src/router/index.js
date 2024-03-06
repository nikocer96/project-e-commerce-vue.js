import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Login from "../views/Login.vue"
import Carrello from "../views/Carrello.vue"

import Prodotto from '../views/Prodotto.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prodotto',
      name: 'prodotto',
      component: Prodotto
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      name: "login",
      path: "/login",
      component: Login 
    },
    {
      name: "carrello",
      path: "/carrello",
      component: Carrello 
    }
  ]
})

export default router
