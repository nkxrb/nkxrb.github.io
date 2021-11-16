---
title: 平时累积的JS使用小技巧
author: nkxrb
avatar: http://cdnblog.nkxrb.xyz/images/home/avatar.png
authorLink: blog.nkxrb.xyz
authorAbout: nkxrb
authorDesc: nkxrb
photos: http://cdnblog.nkxrb.xyz/images/archives/js.jpg
categories: webfront
tags:
 - js
date: 2015-11-05 21:40:01
comments: true
keywords: js
description: '平时累积的JS使用小技巧'
---

>主要介绍语法用法、书写方式、常用函数，规避一些不必要的bug,提高页面加载执行的性能

## JS中typeof 与 instanceof 用法

typeof 返回值有六种可能： "number," "string," "boolean," "object," "function," 和 "undefined."

typeof的局限性：对于Array,Null等特殊对象使用typeof一律返回object

instanceof用于判断一个变量是否某个对象的实例

示例：
```
typeof new Boolean(true) === 'object'; 
typeof new Number(1) === 'object'; 
typeof new String("abc") === 'object';

new Boolean(true) instanceof Boolean === true;
new Number(1) instanceof Number === true;
new String("abc") instanceof String === true;

```

## JavaScript 中 call()、apply()、bind() 的用法

```
var obj = {
	name:'ss',
	age:16,
	myFun:function(){
		console.log(this.name+'年龄'+this.age);
	}
}
var db = {
	name:'坎儿',
	age:99
}

obj.myFun.call(db,'成都','上海')；　　　　 // 坎儿 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);      // 坎儿 年龄 99  来自 成都去往上海  
obj.myFun.bind(db,'成都','上海')();       // 坎儿 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();　　 // 坎儿 年龄 99  来自 成都, 上海去往 undefined
```