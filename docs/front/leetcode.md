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
@[code js](../../src/views/leetcode/listnode/ListNode.js)

### 实现BTree类
@[code js](../../src/views/leetcode/tree/BTree.js)

### LeetCode655
@[code js](../../src/views/leetcode/tree/leetcode655.js)

### LeetCode1104
@[code js](../../src/views/leetcode/tree/leetcode1104.js)