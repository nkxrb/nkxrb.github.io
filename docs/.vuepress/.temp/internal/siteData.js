export const siteData = {
  "base": "/docs/",
  "lang": "zh-cn",
  "title": "nkxrb的博客",
  "description": "一直以来都没有好好总结过自己掌握的知识，埋头学习，一时竟觉得自己什么都不会了。总结、沉淀，然后形成底蕴。",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
