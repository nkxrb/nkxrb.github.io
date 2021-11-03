import * as utils from '../../utils/index'

test('test currying', () => {
  const add = (a: number, b: number, c: number) => {
    return a + b + c
  }
  const adder = utils.currying(add)
  let res = adder(1)(2)(3)
  expect(res).toBe(6)
})

test('test cache', () => {
  const fibonacci = (n: number): number => {
    if (n < 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const fiboCache = utils.readCache(fibonacci)
  let res = fiboCache(3) // 第一次执行会比较慢
  // fiboCache(45) // 第二次会快很多
  expect(res).toBe(3)
})