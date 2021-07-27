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
const hashSort = function () {

}

/**
 * 堆排序
 */
const heapSort = function (array) {
  let len = array.length
  // initMaxHeap(arr, 0) // 初始化最大堆
  for (let i = (len - 1) >> 1; i >= 0; i--) {
    initMaxHeap(array, i) // 初始化最大堆
  }

  function initMaxHeap (arr, top) {
    let left = top * 2 + 1
    let right = top * 2 + 2
    let max = left
    if (left < len && arr[right] > arr[max]) {
      max = right
    }

    if (right < len && arr[max] > arr[top]) {
      swap(arr, top, max) // 将最值放到顶点上
      initMaxHeap(arr, max)
    }

  }

  for (let i = len - 1; i > 0; i--) {
    swap(array, 0, i)
    // initMaxHeap(array, 0)
    len--
  }

  return array

}


const sort = {
  selectSort,
  insertSort,
  bubbleSort,
  quickSort,
  hashSort,
  heapSort
}

// module.exports = sort
export default sort