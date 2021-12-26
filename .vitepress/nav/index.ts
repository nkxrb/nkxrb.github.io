import { generateSidebar } from './auto-generate-sidebar'

const sidebars = [
  { text: '原创', children: generateSidebar('original') },
  { text: '收录', children: generateSidebar('collection') },
  { text: '笔记', children: generateSidebar('note') },
  { text: '其他', children: generateSidebar('other') }
]

const navbar = [
  { text: '首页', link: '/' },
  { text: '原创', link: '/original/' },
  { text: '收录', link: '/collection/' },
  { text: '笔记', link: '/note/' },
  { text: '其他', link: '/other/' },
]

const sidebar = {
  '/original': sidebars,
  '/collection/': sidebars,
  '/note/': sidebars,
  '/other/': sidebars,
  '/': sidebars // 从前到后顺序匹配，必须放在最后
}

export { sidebar, navbar }