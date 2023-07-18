import { createCanvas } from '../shared/interfaceApi'

// 获取全局主容器的上下文
export const getContext = (canvas, type) => {
  let CTX: any = null;
  const displaySize = canvas.getBoundingClientRect();
  canvas.width = Math.round(displaySize.width * window.devicePixelRatio);
  canvas.height = Math.round(displaySize.height * window.devicePixelRatio);

  if(type){
    CTX = canvas.getContext(type)
  }else if(canvas){
    CTX = canvas.getContext('webgl2')
    if(!CTX){
      CTX = canvas.getContext('webgl')
    }
  }

  if(!CTX){
    throw Error('此环境不支持canvas、webgl')
  }

  const w = canvas.width;
  const h = canvas.height;
  console.log('w*h', w, h, w/h)
  CTX.viewport(0,0, w, h)
  // 告诉 WebGL 在绘制时测试深度，所以如果一个正方形后面有另一个正方形
  // 另一个正方形不会被绘制
  CTX.enable(CTX.DEPTH_TEST);
  getSysInfo(CTX);

  return {
    gl: CTX, w, h
  }
}

export const getSysInfo = (gl) => {
  // 查询设备上支持的最大的 2D 纹理尺寸
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  // 大于零时，才能使用 vertex shaders 中的纹理
  gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
  let vertexArray = gl.createVertexArray();
  console.log(vertexArray.vertexAttributeBuffer)
  return {
    maxTextureSize
  }
}


// 清空容器
export const clear = (gl) => {
  // 使用完全不透明的黑色清除所有图像
  gl.clearColor(1.0, 1.0, 1.0, 0);
  gl.clearDepth(1.0);                 // 清除所有的数据
  gl.enable(gl.DEPTH_TEST);           // 深度测试
  gl.depthFunc(gl.LEQUAL);  
  // 用上面指定的颜色清除缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

export const loadShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('着色器源码错误: ' + gl.getShaderInfoLog(shader))
    gl.deleteShader(shader);
    return null;
  }
  return shader
}

// 加载顶点着色器源码
export const loadVsShader = (gl, vsSource) => {
  return loadShader(gl, gl.VERTEX_SHADER, vsSource)
}
// 加载片段着色器源码
export const loadFsShader = (gl, fsSource) => {
  return loadShader(gl, gl.FRAGMENT_SHADER, fsSource)
}

// 初始化着色器程序
export const initProgram = (gl, vsSource, fsSource) => {
  const shaderProgram = gl.createProgram();
  // 初始化着色器程序，让 WebGL 知道如何绘制我们的数据
  const vertexShader = loadVsShader(gl, vsSource)
  const fragmentShader = loadFsShader(gl, fsSource)
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  return shaderProgram
}

// 将顶点数据存储至缓冲器中
export const initPositionBuffer = (gl, position) => {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);
  return positionBuffer
}

export const getTextCanvas = (text) => {
  const canvas = createCanvas()
  canvas.height = 80
  canvas.width = 80
  const ctx = canvas.getContext('2d');
  ctx.font = "16px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 8, 16)
  return ctx.canvas
}

export const bindCanvas = (gl, canvas) => {
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  // ......
  // gl.texImage2D(target, level, internalformat, format, type, canvas)
}

// 获取屏幕坐标矩阵 r*z/dep = x-y+1
export const getScreenMt = (width, height, deep = 1000) => {
  const r = window.devicePixelRatio * 2
  return [
    r/width, 0,         0, -1,
    0,       -r/height, 0, 1,
    0,      0,         1/deep, -0,
    0,       0,         0, 1
  ]
}

export const cobArray = (float32Array, uint8Array) => {
  // 创建 Float64Array 和 Int32Array
  const a = new Float32Array(float32Array);
  const b = new Uint8Array(uint8Array);

  // 创建一个新的 ArrayBuffer
  const totalByteLength = a.byteLength + b.byteLength;
  const buffer = new ArrayBuffer(totalByteLength);

  // 使用 DataView 对象操作 ArrayBuffer
  const dataView = new DataView(buffer);

  // 将 Float64Array 写入到 ArrayBuffer
  let byteOffset = Float32Array.BYTES_PER_ELEMENT + Uint8Array.BYTES_PER_ELEMENT;
  for (let i = 0; i < float32Array.length; i+=5) {
    dataView.setFloat32(byteOffset * i, a[i], true); // 第三个参数为 littleEndian，true 表示小端字节序
    dataView.setUint8(byteOffset * i + 4, b[i]); // 第三个参数为 littleEndian，true 表示小端字节序
  }
// console.log('buff', buffer)
  return buffer
}