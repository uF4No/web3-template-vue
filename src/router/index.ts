import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue'),
  },

  // TODO: for 404 errors
  // {
  //   path: '/:catchAll(.*)',
  //   component: NotFoundComponent,
  //   name: 'NotFound',
  // },
]

const router = createRouter({
  history: createWebHistory(),

  routes,
})

export default router
