---
title: OpenGL学习笔记
---

### 内置变量 

##### 顶点着色器内置变量 

- gl_Position  顶点坐标
- gl_PointSize 顶点大小

##### 片段着色器内置变量  

- gl_FragColor  静态单调颜色
- gl_FragData  动态多种颜色

- gl_FragCoord 【只读】存储了片段的窗口相对坐标 x、y、z 及 1/w。该值是在顶点处理阶段之后对图元插值生成片段计算所得。z 分量是深度值用来表示片段的深度。
- gl_FrontFacing【只读】如果片段属于正面向前（front-facing）的图元，则该变量的值为 true。该变量可以选取顶点着色器计算出的两个颜色之一以模拟两面光照。
- gl_PointCoord【只读】存储的是当前片段所在点图元的二维坐标。点的范围是 0.0 到 1.0。如果当前的图元不是一个点，那么从 gl_PointCoord 读出的值是未定义的。

```c
mediump vec4 gl_FragCoord;
bool gl_FrontFacing;
mediump vec4 gl_FragColor;
mediump vec4 gl_FragData[gl_MaxDrawBuffers];
mediump vec2 gl_PointCoord;
```