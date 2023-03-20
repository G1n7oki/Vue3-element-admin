import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

// 公共路由表
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    redirect: '/profile',
    component: Layout,
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/index.vue'),
        meta: { title: 'profile', icon: 'dashboard' }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  }
]

// 私有路由表
const privateRoutes = [
  {
    path: '/user',
    name: 'User',
    component: Layout,
    redirect: '/user/manage',
    meta: { title: 'user', icon: 'tree' },
    children: [
      {
        path: '/user/manage',
        name: 'UserManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: { title: 'userManage', icon: 'icon' }
      },
      {
        path: '/user/role',
        name: 'UserRole',
        component: () => import('@/views/role-list/index.vue'),
        meta: { title: 'roleList', icon: 'icon' }
      },
      {
        path: '/user/permission',
        name: 'UserPermission',
        component: () => import('@/views/permission-list/index.vue'),
        meta: { title: 'permissionList', icon: 'icon' }
      },
      {
        path: '/user/info:id',
        name: 'UserInfo',
        component: () => import('@/views/user-info/index.vue'),
        meta: { title: 'userInfo', icon: 'icon' }
      },
      {
        path: '/user/import',
        name: 'ExcelImport',
        component: () => import('@/views/import/index.vue'),
        meta: { title: 'excelImport', icon: 'icon' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/ranking',
    meta: { title: 'article', icon: 'tree' },
    children: [
      {
        path: '/article/ranking',
        name: 'ArticleRanking',
        component: () => import('@/views/article-ranking/index.vue'),
        meta: { title: 'articleRanking', icon: 'icon' }
      },
      {
        path: '/article/:id',
        name: 'ArticleDetail',
        component: () => import('@/views/article-detail/index.vue'),
        meta: { title: 'articleDetail', icon: 'icon' }
      },
      {
        path: '/article/create',
        name: 'ArticleCreate',
        component: () => import('@/views/article-create/index.vue'),
        meta: { title: 'articleCreate', icon: 'icon' }
      },
      {
        path: '/article/editor/:id',
        name: 'ArticleEditor',
        component: () => import('@/views/article-create/index.vue'),
        meta: { title: 'articleEditor', icon: 'icon' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
