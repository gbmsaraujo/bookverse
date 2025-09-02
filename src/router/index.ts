import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Discover from '../views/Discover/Discover.vue'
import Home from '../views/Home/Home.vue'
import Library from '../views/Library/Library.vue'
import NotFound from '../views/NotFound/NotFound.vue'

const routes: RouteRecordRaw[] = [
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
    path: '/library',
    name: 'library',
    component: Library
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
