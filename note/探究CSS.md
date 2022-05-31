
## 关于position定位属性的研究

### fixed
元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。

当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

参考文章：
[position：fixed失效探索](https://blog.csdn.net/linkedin_37345339/article/details/105052184)