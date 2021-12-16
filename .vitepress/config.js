import { navbar, sidebar } from './nav/index'

const BASE = '/'

module.exports = {
  lang: 'zh-cn',
  title: 'nkxrb collection',
  description: '每一个不曾起舞的日子，都是对生命的辜负。',
  base: BASE,
  dest: '${sourceDir}/dist',
  head: [
    // 改变title的图标 图片放在public文件夹下
    ['link', { rel: 'icon', href: BASE + 'favicon.ico' }],
  ],
  themeConfig: {
    home: '/',
    repo: 'https://github.com/nkxrb/nkxrb.github.io',
    repoLabel: 'GITHUB',
    darkMode: true,
    toggleSidebar: '护眼',
    editLink: false,
    lastUpdated: false,
    backToHome: '地址可能发生了改变，返回首页试试呢',
    nav: navbar,
    sidebar: sidebar
  },
  define: {
    __GLOBAL_FOO: 'foo'
  }
}