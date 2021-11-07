class ListNode {
  constructor (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  toString () {
    let arr = []
    let node = this
    while (node) {
      arr.push(node.val)
      node = node.next
    }
    return arr.toString()
  }

  static transformArr (arr) {
    if (arr.length < 2) {
      return new ListNode(arr[0])
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

module.exports = ListNode
