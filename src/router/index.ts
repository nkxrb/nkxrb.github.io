import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home/index.vue'
import Example from '@/components/layout/Example.vue'
import LeanCss from '@/views/leancss/index.vue'
import LeetCode from '@/views/leetcode/index.vue'
import Developing from '@/views/error/developing.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/developing',
    name: 'developing',
    component: Developing
  },
  {
    name: 'example',
    path: '/example',
    component: Example
  },
  {
    path: '/leancss/:label',
    name: 'leancss',
    component: LeanCss
  },
  {
    path: '/leetcode/:label',
    name: 'leetcode',
    component: LeetCode
  }
]


const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router