
// (function () {
class TreeNode {
  constructor (val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

const createBTree = function (arr) {
  let root = new TreeNode(arr[0])
  let nodeArr = [root]
  let i = 1
  while (nodeArr.length) {
    if (i >= arr.length) break
    if (arr[i]) {
      nodeArr[0].left = new TreeNode(arr[i])
      nodeArr.push(nodeArr[0].left)
    }
    i++
    if (i >= arr.length) break
    if (arr[i]) {
      nodeArr[0].right = new TreeNode(arr[i])
      nodeArr.push(nodeArr[0].right)
    }
    i++
    nodeArr.shift()
  }

  return root
}

module.exports = {
  TreeNode,
  createBTree
}
// })()

