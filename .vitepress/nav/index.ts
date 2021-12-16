const libs = [
  {
    text: 'vue2', children: [
      { text: '实战经验', link: '/libs/vue2/apply' },
      { text: '简单实现', link: '/libs/vue2/mini' },
      { text: '源码解读', link: '/libs/vue2/source' },
    ]
  },
  {
    text: 'vue3', children: [
      { text: '实战经验', link: '/libs/vue3/apply' },
      { text: '简单实现', link: '/libs/vue3/mini' },
      { text: '源码解读', link: '/libs/vue3/source' },
    ]
  },
  {
    text: 'react', children: [
      { text: '实战经验', link: '/libs/react/apply' },
      { text: '简单实现', link: '/libs/react/mini' },
      { text: '源码解读', link: '/libs/react/source' },
    ]
  },
  {
    text: 'vue-router', children: [
      { text: '实战经验', link: '/libs/router/apply' },
      { text: '简单实现', link: '/libs/router/mini' },
      { text: '源码解读', link: '/libs/router/source' },
    ]
  }
]

const base = [
  { text: '数据结构', link: '/base/data-structure' },
  { text: '算法基础', link: '/base/algorithm' },
]

const develop = [
  { text: 'nkxrb-tools', link: '/develop/nkxrb-tools' },
  { text: 'kidar-echarts', link: '/develop/kidar-echarts' },
  { text: 'kidar-drag', link: '/develop/kidar-drag' },
]

const system = [
  { text: 'Linux常用命令', link: '/system/linux-command' },
  { text: '判断终端设备', link: '/system/check-driver' },
]

const network = [
  { text: 'Http', link: '/network/http' }
]

const browser = [
  { text: '浏览器内核', link: '/browser/core' },
  { text: 'V8引擎', link: '/browser/v8' },
]

const language = [
  { text: 'html', link: '/language/html' },
  { text: 'css', link: '/language/css' },
  { text: 'javascript', link: '/language/javascript' },
  { text: 'typescript', link: '/language/typescript' },
  { text: 'java', link: '/language/java' },
  { text: 'mysql', link: '/language/mysql' },
]

const design = [
  { text: '前端编码规范', link: '/design/eslint' },
  { text: '工程化', link: '/design/project' },
  { text: '设计模式', link: '/design/关于设计模式的思考' },
  { text: '数据库设计', link: '/design/数据库设计' },
  { text: 'Java编码规范', link: '/design/如何更优雅的编写Java代码' },
  { text: '熔断与降级', link: '/design/服务熔断与服务降级' },
  { text: '高并发与多线程', link: '/design/高并发与多线程' },
]

const other = [
  { text: '文档与教程', link: '/other/docs' },
  { text: '更好的软件', link: '/other/software' },
  { text: '超有用网站', link: '/other/website' },
  { text: '神评论', link: '/other/神评论' },
  { text: '唐诗三百首', link: '/other/唐诗三百首' },
]

const sidebars = [
  { text: 'news', link: '/' },
  { text: '自研库', children: develop },
  { text: '第三方库', children: libs },
  { text: '设计与思考', children: design },
  { text: '必备技能', children: base },
  { text: '编程语言', children: language },
  { text: '浏览器', children: browser },
  { text: '网络通信', children: network },
  { text: '操作系统', children: system },
  { text: '其他', children: other }
]

const navbar = [
  {
    text: '文章', link: '/article/', items: [
      { text: '自研库', link: '/libs/vue2/apply' },
    ]
  },
  { text: '关于', link: '/about/' },
]

const sidebar = {
  '/news': sidebars,
  '/article/': sidebars,
  '/serve/': sidebars,
  '/': sidebars // 必须放在最后
}

export { sidebar, navbar }