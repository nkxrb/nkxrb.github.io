
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
