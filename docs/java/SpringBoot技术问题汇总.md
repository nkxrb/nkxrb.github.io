---
title: SpringBoot知识点汇总
author: nkxrb
avatar: http://cdnblog.nkxrb.xyz/images/home/avatar.png
authorLink: blog.nkxrb.xyz
authorAbout: nkxrb
authorDesc: nkxrb
photos: http://cdnblog.nkxrb.xyz/images/archives/spring.jpg
categories: serve
tags:
 - springboot
date: 2018-06-15 22:16:01
comments: true
keywords: springboot
description: '主要介绍下SpringBoot的基础知识，配置说明、内置插件以及常用框架的集成'
---

>Spring Boot的简洁精巧，让以前的主流框架都成为了过去式。但它的开箱即用使得好多人都只知其一，不知其二。为了今后更顺畅的开发，我决定对Spring Boot进行一次深入的了解。

## 第一步：从修改配置入手
1. 前情提要
	 - spring会从classpath下的/config目录或者classpath的根目录查找application.properties或application.yml。
	 - /config优先于classpath根目录
	 - @PropertySource这个注解可以指定具体的属性配置文件，优先级比较低。
	 - 相同优先级位置同时有application.properties和application.yml，那么application.yml里面的属性就会覆盖application.properties里的属性。
	 - 在Spring Boot中多环境配置文件名需要满足application-{profile}.properties的格式，其中{profile}对应你的环境标识
2. 关于动态加载配置，修改配置的方法后面会介绍
3. 配置简介
```yml
#编码配置
server.tomcat.uri-encoding=UTF-8
spring.http.encoding.charset=UTF-8
spring.http.encoding.enabled=true
spring.http.encoding.force=true
spring.messages.encoding=UTF-8
spring.banner.charset=UTF-8

#服务发布路径、端口号配置
server.servlet.context-path=/
server.port=8080

#请求数据最大值配置，主要影响文件上传功能
spring.servlet.multipart.max-file-size=30MB
spring.servlet.multipart.max-request-size=50MB

#生产、开发环境配置
spring.profiles.active=dev

#日志配置
logging.level.org.budgiant.cms=info
logging.level.org.budgiant.authority=info
logging.level.org.budgiant.common=info
logging.level.root=info
logging.level.com.baomidou.mybatisplus.core.mapper=warn
logging.file=./logs/budgiant-cms.log

#数据源配置
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8
spring.datasource.username=root
spring.datasource.password=******

```

## 第二步：启动类的加载顺序，配置重写
## 第三步：有哪些可以重写的方法
## 第四步：有哪些好用的注解以及如何自定义注解
## 第五步：有哪些内置的组件，并比较其他第三方，展示优劣性
## 第六步：常用框架的简单集成