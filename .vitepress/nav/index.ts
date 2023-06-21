import { generateSidebar } from './auto-generate-sidebar'

const sidebar = [
  { text: '原创', items: generateSidebar('original') },
  { text: '手写Vue', items: generateSidebar('mini-vue') },
  { text: '收录', items: generateSidebar('collection') },
  { text: '笔记', items: generateSidebar('note') },
  { text: '其他', items: generateSidebar('other') }
]

const navbar = [
  { text: '首页', link: '/' },
  { text: '原创', link: '/original/' },
  { text: '手写Vue', link: '/mini-vue/v0_0_1' },
  { text: '收录', link: '/collection/' },
  { text: '笔记', link: '/note/' },
  { text: '其他', link: '/other/' },
]

// const sidebar = {
//   '/original/index': sidebars,
//   '/mini-vue/v0_0_1': sidebars,
//   '/collection/': sidebars,
//   '/note/': sidebars,
//   '/other/': sidebars,
//   '/': sidebars // 从前到后顺序匹配，必须放在最后
// }

export { sidebar, navbar }