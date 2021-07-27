import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-cn',
  title: 'nkxrb的博客',
  description: '每一个不曾起舞的日子，都是对生命的辜负。',
  base: '/docs/',
  dest: '${sourceDir}/../dist/docs',
  themeConfig: {
    logo: '/images/logo.png',
  },
})