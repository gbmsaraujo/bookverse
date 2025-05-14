import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Discover from '../views/Discover/Discover.vue'
import NotFound from '../views/NotFound/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
})

export default router
