// import debounce from 'lodash/debounce'


/**
 * 监听容器大小变化
 */
export function listenContainerSize(el: Element, fn: Function) {
  if (ResizeObserver) { // 判断浏览器版本是否支持ResizeObserver，已知：IE11及以下都不支持
    // 新建监听对象 entries 就是下面 observe（） 添加的dom元素
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        fn(entry) // 在此处写监听到变化后做的操作
      }
    });
    // 给监听对象上添加要监听的dom元素
    resizeObserver.observe(el);
  } else {
    window.addEventListener('resize', function () {
      fn()
    })
  }
}