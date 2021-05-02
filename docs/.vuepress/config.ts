import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-cn',
  title: 'nkxrb的博客',
  description: '一直以来都没有好好总结过自己掌握的知识，埋头学习，一时竟觉得自己什么都不会了。总结、沉淀，然后形成底蕴。',
  base: '/docs/',
  themeConfig: {
    logo: '/images/logo.png',
  },
})