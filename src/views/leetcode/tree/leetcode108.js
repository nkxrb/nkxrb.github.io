const BTree = require('./BTree.js')

var sortedArrayToBST = function (nums) {
  if (nums.length < 1) {
    return null
  }

  let mid = Math.floor(nums.length / 2)
  let root = new BTree.BTree(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid))
  console.log(root)
  return root
}


sortedArrayToBST([-10, -3, 0, 5, 9])