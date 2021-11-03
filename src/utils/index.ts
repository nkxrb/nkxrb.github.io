export const routeTo = (path: string) => {
  window.location.href = path;
};

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

/**
 * 函数柯里化封装
 * 功能特性：将多个参数拆分，这样就可以缓存开头几个参数执行的结果
 * 应用场景：前几个参数固定，且调用频繁的函数，进行柯里化处理
 * 示例：fn(1,2,3,4) => fn(1)(2)(3)(4)
 */
export const currying = function (this: any, fn: Function, args?: Array<any>): Function {
  let _this = this
  let len = fn.length // 此处获取的是原函数定义了多少参数
  args = args || []

  return function () {
    let _args = Array.prototype.slice.call(arguments)
    Array.prototype.push.apply(args, _args)

    if (args && args.length < len) {
      return currying.call(_this, fn, args)
    }

    return fn.apply(_this, args)
  }

}

/**
 * 闭包缓存设计案例
 * 通过隔离私有变量，缓存函数之前执行的结果，当函数再次执行时会先判断
 * 缓存中是否存在，避免重复计算，经典的斐波那契函数实现
 */
const fibonacci = (n: number): number => {
  if (n < 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

export const readCache = (fn: Function) => {
  let res: Array<number> = []
  return function (this: any, key: number) {
    if (res[key]) {
      return res[key]
    }
    res[key] = fn.call(this, key)
    return res[key]
  }
}

const fiboCache = readCache(fibonacci)
fiboCache(42) // 第一次执行会比较慢
fiboCache(45) // 第二次会快很多