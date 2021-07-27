const sort = require('./sort')

let arr = [1, 2, 4, 7, 9, 7, 2, 45, 125, 0, 3, 0, -7, -1, -66, 0, 8, 9, 1, -1]
console.log('source', arr)

// sort.selectSort(arr)
// sort.bubbleSort(arr)
// sort.quickSort(arr)
sort.heapSort(arr)
debugger
console.log('res', arr)