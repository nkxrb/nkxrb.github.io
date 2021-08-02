export const routeTo = (path: string) => {
  window.location.href = path;
};

export const importFile = (path: string) => {
  return import(`../${path}`)
}

/**
 * 将单次执行的函数转换成一定时间间隔内，批量执行的函数
 * @param fn 要节流执行的函数
 * @param intervalTime 间隔时间，单位：ms
 * @returns 返回一个新的函数function，用来代替原来的函数
 */
export const intervalFn = function <T>(fn: Function, intervalTime: number): Function {
  let timer: Boolean = false
  let data: Array<T> = []
  return function (param: T) {
    data.push(param)
    if (timer) {
      timer = true
      setTimeout(function () {
        fn(data)
        timer = false
        data.length = 0
      }, intervalTime)
    }
  }
}

/**
 * 节流
 * @param fn 
 * @param intervalTime 
 * @returns 
 */
export const throttle = <T>(fn: Function, intervalTime: number): Function => {
  let timer: Boolean = false
  return function (param: T) {
    if (!timer) {
      timer = true
      setTimeout(function () {
        fn(param)
        timer = false
      }, intervalTime)
    }
  }
}

/**
 * 去抖动
 * @param fn 
 * @param intervalTime 
 * @returns 
 */
export const debounce = <T>(fn: Function, intervalTime: number): Function => {
  let timerId: null | NodeJS.Timeout = null
  return function (param: T) {
    timerId && clearTimeout(timerId)
    timerId = setTimeout(function () {
      fn(param)
    }, intervalTime)
  }
}