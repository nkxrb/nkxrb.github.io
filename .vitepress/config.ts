import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";
import { defineConfig } from 'vitepress';
import { navbar, sidebar } from './nav/index';

const BASE = '/'

export default defineConfig({
  lang: 'zh-cn',
  title: 'nkxrb',
  description: '每一个不曾起舞的日子，都是对生命的辜负。',
  base: BASE,
  lastUpdated: true,
  head: [
    // 改变title的图标 图片放在public文件夹下
    ['link', { rel: 'icon', href: BASE + 'favicon.ico' }],
  ],
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: './dist',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/nkxrb/nkxrb.github.io', }
    ],
    // repo: '',
    // repoLabel: 'GITHUB',
    // darkMode: true,
    // toggleSidebar: '护眼',
    // lastUpdated: false,
    // backToHome: '地址可能发生了改变，返回首页试试呢',
    nav: navbar,
    sidebar: sidebar
  },
  // define: {
  //   __GLOBAL_FOO: 'foo'
  // },
  vite:{
    server: {
      port: 12900
    },
    plugins: [
      wasm(),
      topLevelAwait()
    ],
  },
  markdown: {
    config: (md) => { }
  }
})
