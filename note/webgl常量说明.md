# webgl 中常用的常量说明
-----

## 纹理参数设置

###### TEXTURE_MAG_FILTER 纹理放大滤波器

- LINEAR  线性插值填充 <color-text text="（默认值）" />
- NEAREST 就近取值填充

###### TEXTURE_MIN_FILTER 纹理缩小滤波器  

- NEAREST_MIPMAP_LINEAR <color-text text="（默认值）" />  先获取最近的两个mipmap级别，再线性获取色值
- LINEAR  线性插值填充
- NEAREST 就近取值填充
- NEAREST_MIPMAP_NEAREST 先获取最近的两个mipmap级别，然后再就近取色值
- LINEAR_MIPMAP_NEAREST 获取距离最近的mipmap级别，然后再就近取色值
- LINEAR_MIPMAP_LINEAR 获取距离最近的mipmap级别，然后再线性取色值

###### TEXTURE_WRAP_S 纹理坐标水平填充 s   

- REPEAT <color-text text="（默认值）" /> 水平重复
- CLAMP_TO_EDGE  超出裁剪
- MIRRORED_REPEAT  超出，镜像环绕

###### TEXTURE_WRAP_T 纹理坐标垂直填充 t   

- REPEAT <color-text text="（默认值）" /> 水平重复
- CLAMP_TO_EDGE  超出裁剪
- MIRRORED_REPEAT  超出，镜像环绕

###### TEXTURE_MAX_ANISOTROPY_EXT 纹理最大向异性  

- Float类型值

###### TEXTURE_BASE_LEVEL 纹理映射等级  

- 任意整型值

###### TEXTURE_COMPARE_FUNC 纹理对比函数  

- LEQUAL <color-text text="（默认值）" />
- GEQUAL
- LESS
- GREATER
- EQUAL
- NOTEQUAL
- ALWAYS
- NEVER

###### TEXTURE_COMPARE_MODE 纹理对比模式  

- NONE <color-text text="（默认值）" />
- COMPARE_REF_TO_TEXTURE
