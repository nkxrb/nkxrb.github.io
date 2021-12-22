# 算法基础

### 推荐好文
labuladong的算法小抄 [GitHub](https://labuladong.github.io/algo/)  [Gitee](https://labuladong.gitee.io/algo/)

### 刷题工具
[nkxrb-leetcode](https://github.com/nkxrb/leetcode)
- 运行环境node.js
- 支持jest测试
- 支持typescript

### 十大排序算法
[排序算法-JS版](https://blog.csdn.net/kw023781/article/details/118384290)

### 递归写法，都可以转换为while循环
在做算法题时，递归是非常常见的，但是递归带来的栈内存增加也是很明显的，因此我们需要把递归写法转换为while循环写法，减少内存占用。
具体如何操作，看下面代码
```js
/**
 *  实现一个函数，传入一个节点，返回该节点下的所有子孙节点
 */

// 递归写法, 前面的node一直被下一次递归占用着，直到递归结束才被释放
function getChilds(node){
  if(!node || !node.child) return []
  if(node.child){
    return [node.child, ...getChilds(node.child)]
  }
}

//while循环
function getChilds(node){
  if(!node || !node.child) return []
  const res = []
  const stack = [node]
  while(stack.length>0){
    let child = stack.pop().child
    child && res.push(child) && stack.push(child)
  }
  return res
}

```

### 实现一个链表类
```js
class ListNode<T> {
  val: number | T
  next: ListNode<T> | null
  constructor(val?: T, next?: ListNode<T>) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  toString() {
    let arr = []
    let node = this as ListNode<T> | null
    while (node !== null) {
      arr.push(node.val)
      node = node.next
    }
    return Array.prototype.toString.call(arr)
  }

  static transformArr<T>(arr: Array<T>) {
    if(!arr || arr.length===0){
      return null
    }

    if (arr.length < 2) {
      return new ListNode<T>(arr[0])
    }

    let next = new ListNode(arr[1])
    let head = new ListNode(arr[0], next)
    for (let i = 2; i < arr.length; i++) {
      let node = new ListNode(arr[i])
      next.next = node
      next = node
    }
    return head
  }
}

export { ListNode }
```

### 实现BTree类
```js
/**
 * 二叉树类以及常用方法
 * 常用公式：设深度为n，则每层最大节点数为2^(n-1)  所有最大节点数为2^n-1
 */
class BTree {
  constructor (val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

const createBTree = function (arr) {
  let root = new BTree(arr[0])
  let nodeArr = [root]
  let i = 1
  while (nodeArr.length) {
    if (i >= arr.length) break
    if (arr[i]) {
      nodeArr[0].left = new BTree(arr[i])
      nodeArr.push(nodeArr[0].left)
    }
    i++
    if (i >= arr.length) break
    if (arr[i]) {
      nodeArr[0].right = new BTree(arr[i])
      nodeArr.push(nodeArr[0].right)
    }
    i++
    nodeArr.shift()
  }

  return root
}

const getDepth = function (root) {
  if (!root) return 0
  let l = getDepth(root.left)
  let r = getDepth(root.right)
  return 1 + Math.max(l, r)
}

module.exports = {
  BTree,
  createBTree,
  getDepth
}
```
