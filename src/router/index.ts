import { createRouter, createWebHistory } from 'vue-router'
import { routesList } from '@/utils/helpers'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesList
})

export default router
