import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/home/index.vue')
    }
  ]
})

export default router
