---
title: Vue基础知识汇总
author: nkxrb
avatar: http://cdnblog.nkxrb.xyz/images/home/avatar.png
authorLink: blog.nkxrb.xyz
authorAbout: nkxrb
authorDesc: nkxrb
photos: http://cdnblog.nkxrb.xyz/images/archives/vue.jpeg
categories: webfront
tags:
 - vue
date: 2018-01-05 20:00:00
comments: true
keywords: vue
description: 'Vue基础知识汇总'
---

Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。

## Vue双向绑定是如何实现的
原理是利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的。
```
Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (是否需要添加订阅者) {
                dep.addSub(watcher); // 在这里添加一个订阅者
            }
            return val;
        },
        set: function(newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
});
```

## 组件之间的传值

父组件通过标签上面定义传值
子组件通过props方法接受数据

子组件向父组件传递数据
子组件通过$emit方法传递参数

## 路由之间跳转

声明式（标签跳转） 编程式（ js跳转）

## VUE 插槽slot
具名插槽其实就是给插槽取个名字。一个子组件可以放多个插槽，而且可以放在不同的地方，而父组件填充内容时，可以根据这个名字把内容填充到对应插槽中。

默认插槽就是指没有名字的插槽，子组件未定义的名字的插槽，父级将会把 未指定插槽的填充的内容填充到默认插槽中。

父组件通过 “slot-scope” 来接收子组件传过来的插槽数据，再根据插槽数据来填充插槽的内容

## 怎样使用自定义的组件

 - 在components目录新建你的组件文件（indexPage.vue），script一定要export default {}
 - 在需要用的页面（组件）中导入：import indexPage from ‘@/components/indexPage.vue’
 - 注入到vue的子组件的components属性上面,components:{indexPage}
 - 在template视图view中使用

## 如何实现按需加载配合webpack设置

webpack中提供了require.ensure()来实现按需加载。以前引入路由是通过import 这样的方式引入，改为const定义的方式进行引入。

不进行页面按需加载引入方式：import home from ‘…/…/common/home.vue’

进行页面按需加载的引入方式：const home = r => require.ensure( [], () => r (require(’…/…/common/home.vue’)))

## vuex相关

（1）vuex是什么？怎么使用？哪种功能场景使用它？

vue框架中状态管理。在main.js引入store，注入。新建一个目录store，…… export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

（2）vuex有哪几种属性？

有五种，分别是 State、 Getter、Mutation 、Action、 Module

vuex的State特性

A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data

B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新

C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

vuex的Getter特性

A、getters 可以对State进行计算操作，它就是Store的计算属性

B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用

C、 如果一个状态只在一个组件内使用，是可以不用getters

vuex的Mutation特性

Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。

（3）不用Vuex会带来什么问题？

可维护性会下降，想修改数据要维护三个地方；

可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；

增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背

## <keep-alive> </keep-alive>的作用是什么
包裹动态组件时，会缓存不活动的组件实例，主要用于保留组件状态或避免重新渲染。

## Vue中引入组件的步骤
1）采用ES6的import … from …语法或CommonJS的require()方法引入组件

2）对组件进行注册,代码如下

// 注册Vue.component(‘my-component’, { template:’

A custom component!

'})

3）使用组件
## 指令v-el的作用是什么
提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标.可以是 CSS 选择器，也可以是一个 HTMLElement 实例

## VUE生命周期
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后

## vue指令有哪些？作用分别是啥？
 - v-if：判断是否隐藏
 - v-for：数据循环
 - v-bind:**：绑定一个属性
 - v-model：实现双向绑定
 - v-el：挂载一个页面已存在的DOM对象


## Vue的路由实现
hash模式 、 history模式、abstract模式