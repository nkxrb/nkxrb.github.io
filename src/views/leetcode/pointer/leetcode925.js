/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function (name, typed) {
  // 若两个字符全等，直接返回true
  if (name === typed) return true

  // typed的长度必须大于name，否则返回false，此处不需要等于，因为上面已经判断过全等的情况
  if (!(typed.length > name.length)) return false

  // 将两个字符串拆分成数组
  let nameArr = name.split('')  // 对应n指针
  let typedArr = typed.split('') // 对应t指针

  // 记录t指针遇到重复字符时，移动的步数
  let count = 0
  let n = 0

  // 双指针进行遍历操作
  for (let t = 0; t < typedArr.length; t++) {

    // 判断两个指针对应的字符是否相等
    if (typedArr[t] !== nameArr[n]) {
      // 不等时，n指针+1，继续判断
      // count 记录的是t指针由于重复字符移动的步数，因此也是n指针允许移动的最大步数
      for (let c = 1; c < count; c++) {
        n++
        if (typedArr[t] === nameArr[n]) break
        // 全部遍历完依然没有符合的
        if (c === count - 1) return false
      }

      // 计步器归1,因为初始从1开始
      count = 1
    } else {
      count++
    }
  }

  return true
}

isLongPressedName('saeed', 'ssaaedd')