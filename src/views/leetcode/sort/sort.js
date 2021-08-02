const swap = function (arr, i, j) {
  if (i !== j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

/**
 * 选择排序
 */
const selectSort = function (arr) {
  let minIndex = 0
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}

/**
 * 插入排序
 */
const insertSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let curIdx = i
    while (arr[curIdx] < arr[curIdx - 1]) {
      swap(arr, curIdx, curIdx - 1)
      curIdx--
    }
  }
}

/**
 * 冒泡排序
 */
const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}

/**
 * 快速排序
 */
const quickSort = function (arr) {
  // 分区
  const partition = (list, l, r) => {
    let pivot = list[l]
    while (l < r) {
      while (l < r && list[r] > pivot) { // 
        r--
      }
      list[l] = list[r]

      while (l < r && list[l] <= pivot) {
        l++
      }
      list[r] = list[l]
    }

    list[l] = pivot
    return l
  }

  const stack = [[0, arr.length - 1]]

  while (stack.length > 0) {
    let [start, end] = stack.shift() || []
    let pivot = partition(arr, start, end)
    start < pivot - 1 && stack.push([start, pivot - 1])
    pivot + 1 < end && stack.push([pivot + 1, end])
  }

  return arr

}

/**
 * 哈希排序
 */
const shellSort = function (arr) {
  const insertSort = function (arr, gap) {
    for (let i = gap; i < arr.length; i++) {
      let curIdx = i
      while (arr[curIdx] < arr[curIdx - gap]) {
        swap(arr, curIdx, curIdx - gap)
        curIdx -= gap
      }
    }
  }

  let gap = 1
  while (gap <= arr.length) {
    gap = gap * 3
  }
  while (gap > 0) {
    insertSort(arr, gap)
    gap = gap / 3
  }


}

/**
 * 堆排序
 */
const heapSort = function (arr) {
  // 初始化最大堆
  for (let i = 1; i < arr.length; i++) {
    let child = i
    let parent = (child - 1) >> 1
    while (child > 0 && arr[child] > arr[parent]) {
      swap(arr, child, parent)
      child = parent
      parent = (child - 1) >> 1
    }
  }

  // 将顶堆元素与末尾元素交换，重置大顶堆
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    // 交换后，顶堆元素不是最大值了，所以需要不断的向下移动，直到满足大顶堆的要求
    let top = 0
    while (top < i) {
      let left = top * 2 + 1
      let right = top * 2 + 2
      let max = top
      if (left < i && arr[left] > arr[max]) {
        max = left
      }
      if (right < i && arr[right] > arr[max]) {
        max = right
      }
      if (max !== top) {
        swap(arr, max, top)
        top = max
      } else {
        break
      }
    }
  }

  return arr

}


const sort = {
  selectSort,
  insertSort,
  bubbleSort,
  quickSort,
  shellSort,
  heapSort
}

module.exports = sort
// export default sort

function test () {
  let arr = [1, 2, 4, 7, 9, 7, 2, 45, 125, 0, 3, 0, -7, -1, -66, 0, 8, 9, 1, -1]
  console.log('source', arr)

  // shellSort(arr)
  // insertSort(arr)
  // selectSort(arr)
  // bubbleSort(arr)
  // quickSort(arr)
  heapSort(arr)
  console.log('res', arr)
}
test()