import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/albums/views/PhotoApp'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
