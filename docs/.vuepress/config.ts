import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-cn',
  title: 'nkxrb collection',
  description: '每一个不曾起舞的日子，都是对生命的辜负。',
  base: '/docs/',
  dest: '${sourceDir}/../dist/docs',
  themeConfig: {
    home: '/',
    logo: '/images/logo.png',
    repo: 'https://github.com/nkxrb/nkxrb.github.io',
    repoLabel: 'GITHUB',
    darkMode: true,
    toggleSidebar: '护眼',
    editLink: false,
    lastUpdated: false,
    backToHome: '地址可能发生了改变，返回首页试试呢',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '前端', link: '/front/', children: [
          { text: '技能自查表', link: '/front/base.html' },
          { text: '文档与教程', link: '/front/docs.html' },
          { text: '工程化', link: '/front/project.html' },
          { text: '算法随笔', link: '/front/leetcode.html' },
          { text: 'nkxrb-tools', link: '/front/utils.html' },
          { text: 'kidar-echarts', link: '/front/components/kidar-echarts.html' },
          { text: 'kidar-drag', link: '/front/components/kidar-drag.html' },
          { text: 'mini路由', link: '/front/components/mini-router.html' },
        ]
      },
      {
        text: '服务端', link: '/java/', children: [
          { text: '数据库设计', link: '/java/如何设计数据库表结构，多年实用经验汇总.html' },
          { text: 'Java编码规范', link: '/java/如何更优雅的编写Java代码.html' },
          { text: 'Linux常用命令', link: '/java/Linux常用命令.html' },
          { text: '熔断与降级', link: '/java/服务熔断与服务降级.html' },
          { text: '高并发与多线程', link: '/java/高并发与多线程.html' },
          { text: '设计模式', link: '/java/关于“设计模式”的思考.html' },
        ]
      },
      { text: '关于', link: '/about/' },
    ]
  },
  // theme: path.resolve(__dirname, './theme'),
  define: {
    __GLOBAL_FOO: 'foo'
  }
})