import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "PhotoApp" */ '@/modules/albums/PhotoApp'),
    children: [
      {
        path: 'albums/:id',
        component: () => import(/* webpackChunkName: "PhotoView" */ '@/modules/albums/views/PhotoView')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
