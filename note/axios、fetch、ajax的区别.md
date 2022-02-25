## axios、fetch、$.ajax 的区别

### axios

axios 是一个独立的数据请求库，功能全面，是对 xhr 的进一步封装，且使用 Promise 来实现的

### fetch

fetch 是浏览器新出的一套 API，原生 JS 功能，也是基于 Promise 实现的，但功能方面就没有 axios 那么全面，强大。并且低版本的浏览器需要考虑兼容性。

### $.ajax

$.ajax 是 Jquery 框架基于 xhr 封装的，我们在不使用 Jquery 的情况下，也没必要为了数据请求而引入整个 Jquery 框架。
