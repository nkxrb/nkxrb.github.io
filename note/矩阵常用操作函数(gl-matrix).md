
#### perspectiveFromFieldOfView

使用视场角和宽高比来生成透视投影矩阵   
- out     要输出的数组
- fov     可视角度 0 到 180 度之间的值
- aspect  宽高比
- near    近平面距离
- far     远平面距离

```c#
mat4 perspectiveFromFieldOfView(array out, int fov, float aspect, float near, float far)
```

#### perspectiveZO  

- out     要输出的数组
- 屏幕左距离
- 屏幕右距离
- 屏幕上距离
- 屏幕下距离
- 近平面的距离（必须是正数）
- 远平面的距离（必须是正数）

```c#
mat4 perspectiveZO(array out, float left, float right, float bottom, float top, float near, float far)
```

#### perspectiveNO

与“perspectiveZO”相似，区别是 far 远平面距离可以是负数
- 屏幕左距离
- 屏幕右距离
- 屏幕上距离
- 屏幕下距离
- 近平面的距离（必须是正数）
- 远平面的距离（可以是负数）

```c#
mat4 perspectiveNO(array out, float fov, float aspect, float near, float far)
```


#### perspective

与
使用左、右、上、下、近平面和远平面的距离来生成透视投影矩阵，其中远平面和近平面都必须是正数

```c#
mat4 perspective(array out, float fov, float aspect, float zNear, float zFar)
```