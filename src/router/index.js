import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comments/:id/:userid',
    name: 'Comments',
    component: () => import('../views/Comments.vue')
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('../views/Profile.vue')

  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
