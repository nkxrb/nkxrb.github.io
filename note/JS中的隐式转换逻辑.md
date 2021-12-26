# JS中的隐式转换
---
## 隐式转换触发时机
- 不同类型比较时
- 使用运算符对非数字类型运算时
- if的条件转换

## == 比较时，遵守的规则如下
1. 当同类型比较时，对象比较的是引用，原始值比较的就是值
2. 当不同类型比较时，会转换为相同类型，然后再比较
    - Object会先调用toString, 再valueOf方法转换为string
    - string 转为 number
    - boolean 转为 number, true=1, false=0
    - null == undefined 只有它两相等，与其他值比较均为false
    - NaN 与任何值比较，都返回false，包括它自身
  因此通过改写toString 或者valueOf方法，就能出现一些奇怪的现象

## 当作为判定条件时，所有类型都会转为Boolean类型
 - 0,'',null,undefined,NaN 为false，其他情况均为true


## 扩展下Object.is(a, b)
    - Object.is(0, -0) // false
    - Object.is(NaN, NaN) //true
    - 其他情况与 === 相同，不会进行类型转换