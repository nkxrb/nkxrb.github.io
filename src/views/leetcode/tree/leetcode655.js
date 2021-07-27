const BTree = require('./BTree.js')

/**
 * 在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：
 * 
 * 行数 m 应当等于给定二叉树的高度。
 * 列数 n 应当总是奇数。
 * 根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。
 * 每个未使用的空间应包含一个空的字符串""。
 * 使用相同的规则输出子树。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/print-binary-tree
 * @param {BTree} root
 * @return {string[][]}
 */
const printTree = function (root) {
  let treeArr = []
  function printNode (node, i) {
    if (!treeArr[i]) {
      treeArr[i] = []
    }

    for (let j = 0; j < i; j++) {
      treeArr[j].push('')
    }

    if (!node) {
      treeArr[i].push('')
      return
    }



    if (node.left || (node.right || i < treeArr.length)) {
      printNode(node.left, i + 1)

      treeArr[i].push(node.val.toString())
      treeArr[i + 1].push('')

      printNode(node.right, i + 1)
    } else {
      treeArr[i].push(node.val.toString())
    }


  }

  printNode(root, 0)

  return treeArr

}

function test (arr) {
  let root = BTree.createBTree(arr)
  let res = printTree(root)
  console.log(res)
}

test([1, 2, 3, null, 4])