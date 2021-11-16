const ListNode = require('./ListNode.js')

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  let stack = [l1, l2]
  let cur = new ListNode(0)
  let head = new ListNode(0, cur)

  while (stack.length > 0) {
    let node2 = stack.pop()
    let node1 = stack.pop()

    if (!node1) {
      cur = node2
      cur = null
    } else if (!node2) {
      cur = node1
      cur = null
    } else if (node1.val <= node2.val) {
      cur.next = node1
      node1 = node1.next
      stack = [node1, node2]
    } else {
      cur.next = node2
      node2 = node2.next
      stack = [node2, node1]
    }
  }

  return head.next
}

let res = mergeTwoLists(ListNode.transformArr([1, 2, 4]), ListNode.transformArr([1, 3, 4]))

console.log(res)