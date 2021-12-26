---
title: 如何更优雅的编写Java代码
author: nkxrb
avatar: http://cdnblog.nkxrb.xyz/images/home/avatar.png
authorLink: blog.nkxrb.xyz
authorAbout: nkxrb
authorDesc: nkxrb
photos: http://cdnblog.nkxrb.xyz/images/archives/java5.jpeg
categories: serve
tags:
 - java
date: 2019-01-05 21:16:01
comments: true
keywords: 代码规范
description: '如何更优雅的编写Java代码'
---
当面对复杂多变的业务时，许多程序员难免会使用if-else 多层嵌套，或复制此方法，重命名，冗余代码繁多，可读性差。。。

其实大多数原因是因为我们日常编写Java时的习惯导致的，具备良好的编码习惯，可以为后续业务的进展减少许多麻烦，同时也为未来系统重构奠定了基础。

那么，如何养成好的编码习惯呢？什么样的习惯算是好习惯呢？

这样的规定没有绝对，因项目的走向不同而不同。以下习惯仅供参考 ∩_∩！

## 必要的 EditUtil （项目组自定义的）
项目组应建立一套通用的工具类，用于日常编写代码时，处理常用功能的Util
 - 统一的数据类型转化
 - 判空（大多程序员容易犯的错误，忘记判空）
 - 对象比较大小
 - hash
 - UUID获取
 - 正则校验
 - 编码转换
 - 加解密
 ...

## 静态常量 CommonStatic
系统经常使用到的静态常量存储
 - 系统初始值
 - 转义字典
 - 正则表达式
 ...

## 出入参统一封装类
 - code(响应码)，项目组尽可能统一下响应码级别
 - msg(响应信息)
 - rows(响应数据)
 - total(用于分页时的总记录数)

## 命名规则
 - 意义明确！！！
 - 注意大小写
 - 无论驼峰还是下划线，一定要统一统一
 - 变量（名词）、方法（动词+【名词】）

## 避免无用的变量声明，提高垃圾回收效率

## 关于异常的处理
 - try块放到了事务代码中，catch异常后，如果需要回滚事务，必须手动回滚事务
 - 在finally块必须对文件io进行关闭
 - 不能在finally使用return，fanally块中的return返回方法结束执行，不会再执行 try 块中的 return 语句
 - 循坏体中避免不必要的try-catch操作

## DateTimeUtil
对于日期时间的统一处理，注意格式规范统一

## 分页处理
 - 注意分页的效率
 - 注意判断前端传来的参数校验，避免大批量数据的查询

## ifelse的嵌套不能超过3层
 - 可以考虑设计模式，抽取父类，子类，多实现等方式

## 服务器相关的配置集中管理，避免误操导致的灾难性后果
 - 使用远程获取配置的方式，而不是在代码中硬编码