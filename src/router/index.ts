import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/home/index.vue'
import LeanCss from '@/views/leancss/index.vue'
import LeetCode from '@/views/leetcode/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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