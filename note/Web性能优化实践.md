
## 代码规范，风格统一，简洁大方
 - 通用的css,js合并，小文件合并，减少请求并发数，同时也要注意拆分过大文件
 - style要合理运用，优先考虑可维护性
## 利用Google开发者工具的 Coverage 查看无用的代码
## 用 CSS 替换图片
```
img {
    -webkit-filter: grayscale(100%); 
    /* old safari */
    filter: grayscale(100%);
}
```
## 精灵图的使用
## gzip压缩
## 减少HTTP请求次数，DNS查询次数
## 加载顺序
 - 将CSS放在 HEAD中
 - 将外部脚本置底
## HTTP缓存过期时间
 - 不同文件使用不同的缓存策略
## 