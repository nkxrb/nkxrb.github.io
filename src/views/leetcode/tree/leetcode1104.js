var pathInZigZagTree = function (label) {
  // 因为都是顺序递增的，可利用公式
  let depth = Math.ceil(Math.log2(label + 1))
  let paths = [1]
  paths[depth - 1] = label
  for (let i = depth; i > 2; i--) {
    let start = getStart(i)
    let offset = Math.floor((start - label) / 2)

    paths[i - 2] = label = getStart(i - 1) + offset
    console.log(label, start, offset)
  }
  return paths

}

function getStart (i) {
  return i % 2 === 0 ? Math.pow(2, i) - 1 : Math.pow(2, i - 1)
}

let res = pathInZigZagTree(36)
console.log(res)
