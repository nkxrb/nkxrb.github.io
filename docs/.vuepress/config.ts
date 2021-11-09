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
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '前端', link: '/front/', children: [
          { text: '技能自查表', link: '/front/base.html' },
          { text: 'nkxrb-tools', link: '/front/utils.html' },
          { text: 'kidar-echarts', link: '/front/components/kidar-echarts.html' },
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