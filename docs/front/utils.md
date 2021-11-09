# nkxrb-tools
自己平时开发写的一些JS工具，有些还是蛮实用的, 使用typescript编写，更好的提示与校验
### 安装 | install
```shell
npm install nkxrb-tools
```

### 监听div容器的宽高变化
 - listenElResize 监听指定div宽高变化
 - removeListenElResize 移除该div上的宽高监听事件
 - 兼容IE11
 - 运行环境：浏览器
```js
// 按需引入
import {listenElResize, removeListenElResize} from 'nkxrb-tools'

const dom = document.querySelector('#id')
// 添加监听
listenElResize(dom, entry=>{
  console.log(entry.target) // 打印dom对象
})
...
// 销毁时，移除监听
removeListenElResize(dom)
```

### 计算一段文字在浏览器中的宽度
- getTextWidth  使用canvas生成一段文字，并根据字体大小确定这段文字的展现长度
- 运行环境：浏览器
```js
// 按需引入
import { getTextWidth } from 'nkxrb-tools'

getTextWidth('计算span|div77的宽度', 'blod 12px Arial') // 276 (px)
```
### 缓存结果
 - readCache 利用闭包技术，将复杂的计算结果进行存储，提高二次计算的速度
```js
import { readCache } from 'nkxrb-tools'

// 使用场景：斐波那契数列
const fibonacciSlow = (n: number): number => {
  if (n < 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 使用缓存后的斐波那契，二次计算会快很多
 */
const fibonacci = readCache(fibonacciSlow)

fibonacci(45) // 第一次执行速度很慢

fibonacci(60) // 第二次执行速度就快了很多
```





### 柯里化函数
```js
/**
 * 函数柯里化封装
 * 功能特性：将多个参数拆分，这样就可以缓存开头几个参数执行的结果
 * 应用场景：前几个参数固定，且调用频繁的函数，进行柯里化处理
 * 示例：fn(1,2,3,4) => fn(1)(2)(3)(4)
 */
const currying = function (this: any, fn: Function, args?: Array<any>): Function {
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
```

### 延迟批量执行
- intervalFn 
- 将单次执行的函数转换成一定时间间隔内，批量执行的函数
- 使用场景：收集操作日志，当用户频繁操作时，确保每隔60s向服务器发送一次，防止频繁请求接口造成阻塞

```js
import { intervalFn } from 'nkxrb-tools'

/**
 * 将单次执行的函数转换成一定时间间隔内，批量执行的函数
 * @param fn 要节流执行的函数
 * @param intervalTime 间隔时间，单位：ms
 * @returns 返回一个新的函数function，用来代替原来的函数
 */
const intervalFn = function <T>(fn: Function, intervalTime: number): Function {
  let flag: Boolean = false
  let timerId: NodeJS.Timeout | undefined
  let data: Array<T> = []
  return function (param: T) {
    data.push(param)
    if (!flag) {
      flag = true
      timerId && clearTimeout(timerId)
      if (data.length === 0) return 'finish'
      timerId = setTimeout(function () {
        fn(data)
        flag = false
        data.length = 0
      }, intervalTime)
    }
  }
}
```

### 手写简单防抖函数
```js
const debounce = (fn: Function, intervalTime: number): Function => {
  let timerId: NodeJS.Timeout | undefined
  let res: any = undefined
  return function (this: any, ...args: Array<any>) {
    timerId && clearTimeout(timerId)
    timerId = setTimeout(() => {
      res = fn.apply(this, args)
    }, intervalTime)
  }
}
```

### 手写简单节流函数
```js
const throttle = (fn: Function, intervalTime: number): Function => {
  let timerId = null
  let flag = false
  return function (this: any, ...args: Array<any>) {
    let _self = this
    if (!flag) {
      timerId = setTimeout(function () {
        fn.apply(_self, args)
        flag = false
      }, intervalTime)
      flag = true
    }
  }
}
```

### 手写简单bind实现
```js
Function.prototype.mybind = function (ctx, ...args) {
  return (...innerArgs: any) => this.call(ctx, ...args, ...innerArgs)
}
```


### 手写简单链表对象
```js
import { ListNode } from 'nkxrb-tools'

// 将数组转换为链表
ListNode.transformArr(arr)

// 实例化一个节点对象
let node = new ListNode(val, next)
```

### 两个可能超过number存储的整数相加
```js
import { largePlus } from 'nkxrb-tools'

largePlus('999999999999','213456')  // 1000000213455
```