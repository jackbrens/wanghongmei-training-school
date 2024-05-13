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
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '公司介绍'
      },
      component: () => import('@/views/about-us/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '新闻中心'
      },
      component: () => import('@/views/news/index.vue')
    },
    {
      path: '/classicProjects',
      name: 'classicProjects',
      meta: {
        title: '经典项目'
      },
      component: () => import('@/views/classic-projects/index.vue')
    },
    {
      path: '/storeInfo',
      name: 'storeInfo',
      meta: {
        title: '门店信息'
      },
      component: () => import('@/views/store-info/index.vue')
    },
    {
      path: '/brandCulture',
      name: 'brandCulture',
      meta: {
        title: '品牌故事'
      },
      component: () => import('@/views/brand-culture/index.vue')
    },
    {
      path: '/businessSegments',
      name: 'businessSegments',
      meta: {
        title: '业务板块',

        // 不需要底部的margin
        footerNoMargin: true
      },
      component: () => import('@/views/business-segments/index.vue')
    },
    {
      path: '/corporateCulture',
      name: 'corporateCulture',
      meta: {
        title: '企业文化'
      },
      component: () => import('@/views/corporate-culture/index.vue')
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      meta: {
        title: '品牌加盟'
      },
      component: () => import('@/views/join-us/index.vue')
    }
  ]
})

export default router