import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
    }
    
  ]
})

export default router
