## JS 异步加载方案

### <script defer>

等到 DOM 文档全部解析完才执行。 但只有 IE 能用

```html
<script defer src="test.js"></script>

<script defer>
  console.log("defer");
</script>
```

### <script async>

js 加载完就执行，只能加载外部脚本

```html
<script async src="test.js"></script>
```

### 手动创建 script 标签元素

```html
<script>
  let script = document.createElement("script");
  script.src = "test.js";

  if (script.readyState) {
    // 兼容IE的写法
    script.onreadystatechange = function () {
      if (script.readyState === "complate" || script.readyState === "loaded") {
        test(); // 确保test.js文件加载完成后执行
      }
    };
  } else {
    script.onload = function () {
      test();
    };
  }

  document.body.appendChild(script);
</script>
```
