# nkxrb-tools
自己平时开发写的一些JS工具，有些还是蛮实用的
### 安装 | install
```shell
npm install nkxrb-tools
```

### 监听指定Div宽高变
```js
import {listenElResize, removeListenElResize} from 'nkxrb-tools'
```
 - listenElResize 监听指定Div宽高变化
 - removeListenElResize 移除该Div上的大小监听事件

## 已完成的工具有：

| 函数名                | 参数                                                         | 返回值  | 说明                             |
| -------------------- | ------------------------------------------------------------ | ------ | -------------------------------- |
| listenElResize       | el: HTMLElement, fn: (entry?: ResizeObserverEntry) => void   | --     | 监听指定Div宽高变化                |
| removeListenElResize | el: HTMLElement（注意，此参数需要和添加监听的el为同一个对象）    | --     | 移除该Div上的大小监听事件          |
| largePlus            | a: string, b: string                                         | string | 两个可能超过number存储的整数相加   |
| getTextWidth         | text: string, font: string = 'blod 12px Arial'               | number | 计算一段文字在浏览器中的宽度       |
| readCache            | fn: Function                                                 |Function| 缓存一个函数相同的计算结果，提高性能 |
|                      |                                                              |        |                                  |
|                      |                                                              |        |                                  |
|                      |                                                              |        |                                  |

  
