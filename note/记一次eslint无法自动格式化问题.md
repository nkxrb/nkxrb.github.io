---
title: 记一次vscode中，eslint无法自动格式化问题
description: eslint在vscode中不生效, vscode eslint not working
head:
  - - meta
    - name: keywords
      content: vscode setting eslint not working
---

## 找到问题根源，彻底解决VSCode ESLint 不生效问题

### 现象  
一直都挺好用的eslint代码规范， 每次编码保存时会帮我自动格式化，书写不规范时也会出现红色波浪提示。
突然有一天，就失效了。但是代码运行提交时又有相关校验，导致得一直手动改写规范，太难了！！

### 开始排查问题

1. 是不是vscode配置错了

打开setting.json 和同事的也对比了下，完全看不出来哪里有问题

vscode setting.json 关键配置如下， 一般配置了这些，就会触发eslint校验了
```json
"editor.defaultFormatter": "dbaeumer.vscode-eslint",
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "always",
  "source.organizeImports": "always"
},
```

2. 是不是哪个插件和ESLint插件冲突了

打开vscode侧边的插件扩展，查看已安装的扩展，主要关注和代码风格有关的扩展，逐个「禁用工作区」来试试

<img src="/images/ed-vscode-plugin.png" alt="preview" style="zoom:100%;" />


3. 这ESLint在vscode中执行，就没相关日志可以查看吗？ 还真让我找到了

打开vscode控制台，如下图看日志

<img src="/images/ed-vscode-log.png" alt="preview" style="zoom:100%;" />

看到日志，根据错误信息进行针对性修复，就可以解决eslint在vscode中不生效的问题了

有些问题还是比较棘手的，记录一下

- eslint 相关包依赖找不到

  a) 看看是不是node版本不对，删除node_modules，重新安装所有依赖

  b) 如果使用的是pnpm, 则看看是不是全局安装了一些包，导致软链接的文件目录不对，版本号错误

  c) 不建议全局安装eslint，直接使用当前项目下的eslint已经相关依赖包最好