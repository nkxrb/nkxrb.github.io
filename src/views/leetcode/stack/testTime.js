function testStr () {
  let s = ''
  const str = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < Math.pow(10, 5); i++) {
    s += str.charAt(Math.floor(Math.random() * 35))
  }
  console.log(s.length)
  console.time()

}

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  let start = 0
  let end = 0
  let temp = ''
  let res = []
  const keyMap = {
    '&quot;': '\"',
    '&apos;': '\'',
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&frasl;': '/'
  }
  while (end < text.length) {
    while (text.charAt(end) !== '&' && end < text.length) {
      end++
    }
    res.push(text.substring(start, end))

    if (end >= text.length) break

    temp = text.substring(end, end + 7)
    if (temp.indexOf(';') > 0) {
      for (let k in keyMap) {
        if (temp.startsWith(k)) {
          temp = keyMap[k]
          end += k.length - 1
          break
        }
      }
    }
    res.push(temp.charAt(0))
    end++
    start = end
  }

  return res.join('')
}

let res = entityParser('&amp; is an HTML entity but &ambassador; is not.')

console.log(res)