import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/landing/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
