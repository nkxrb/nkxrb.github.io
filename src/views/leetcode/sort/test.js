
let arr = [1, 2, 4, 7, 9, 7, 2, 45, 125, 0, 3, 0, -7, -1, -66, 0, 8, 9, 1, -1]


const upload = str => {
  console.log(str)
}

const interValFn = function (fn) {
  let time = null
  let data = []
  return function (str) {
    data.push(str)
    if (time === null) {
      time = setTimeout(function () {
        fn(data.join(','))
        time = null
        data.length = 0
      }, 1000)
    }
  }
}

const debounce = function (fn, intervalTime) {
  let timerId = null
  return function (param) {
    timerId && clearTimeout(timerId)
    timerId = setTimeout(function () {
      fn(param)
    }, intervalTime)
  }
}

let map = 'abcdefghijklmnopqrstuvwxyz'
const interValUpload = debounce(upload, 1000)
// setInterval(() => {
//   let str = map.charAt(Math.random() * 26)
//   interValUpload(str)
// }, 100)

interValUpload('vvv')
interValUpload('bbb')
interValUpload('uuu')


