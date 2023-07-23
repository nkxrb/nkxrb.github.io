import { 
  getContext, initProgram, initPositionBuffer,
  clear, getTextCanvas, getScreenMt
} from './webglUtils'
import {vsSource_points, fsSource_points, vsSource_texture, fsSource_texture} from './constant'

export const useWebglRender = (canvas, type?) => {

  const KidarGL = { contextType: type }
  let {gl, w, h} = getContext(canvas, type);
  const aspect = w/h
  const project = getScreenMt(w, h)
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  // 初始化渲染器1
  const pointsProgram = initProgram(gl, vsSource_points, fsSource_points)
  const vertexPosition = gl.getAttribLocation(pointsProgram, 'a_position')
  const vertexSize = gl.getAttribLocation(pointsProgram, 'a_size')
  const vertexColor = gl.getAttribLocation(pointsProgram, 'a_color')
  const projMt = gl.getUniformLocation(pointsProgram, "projMt");
  
  const positsBuffer = gl.createBuffer();

  // 初始化渲染器2
  const textProgram = initProgram(gl, vsSource_texture, fsSource_texture)
  const aPosition = gl.getAttribLocation(textProgram, 'a_position')
  const aTexCoord = gl.getAttribLocation(textProgram, 'a_texCoord')
  const textProjMt = gl.getUniformLocation(textProgram, "projMt");
  gl.enableVertexAttribArray(aPosition);
  gl.enableVertexAttribArray(aTexCoord);
  const textBuffer = gl.createBuffer();

  const clearScene = () => {
    clear(gl)
  }

  const setTexture = (texImage) => {
    // 将图像数据上传到WebGL
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // 将画布内容作为纹理绑定到WebGL矩形上
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texImage);
    // 设置纹理的缩放填充方式
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.bindTexture(gl.TEXTURE_2D, texture);
  }

  const loadImgTexture = (imgSrc) => {
    const img = new Image();
    img.onload = () => {
      setTexture(img)
    }
    img.src = imgSrc;
  }

  const drawPoints = (points) => {
    if(!points || points.length === 0) return
    // console.log(points.length)
    gl.bindBuffer(gl.ARRAY_BUFFER, positsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(vertexPosition);
    gl.enableVertexAttribArray(vertexSize);
    gl.enableVertexAttribArray(vertexColor);
    // 3*4 + 4*4 = 28
    gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 32, 0);
    gl.vertexAttribPointer(vertexSize, 1, gl.FLOAT, false, 32, 12);
    gl.vertexAttribPointer(vertexColor, 4, gl.FLOAT, false, 32, 16);
    gl.useProgram(pointsProgram);
    gl.uniformMatrix4fv(projMt, false, new Float32Array(project));
    gl.drawArrays(gl.POINTS, 0, points.length/8);
  }

  const updateBuffer = (points) => {
    // gl.bindBuffer(gl.ARRAY_BUFFER, positsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 32, 0);
    gl.vertexAttribPointer(vertexSize, 1, gl.FLOAT, false, 32, 12);
    gl.vertexAttribPointer(vertexColor, 4, gl.FLOAT, false, 32, 16);
    gl.useProgram(pointsProgram);
    // gl.bindVertexArray(vao);
    gl.drawArrays(gl.POINTS, 0, points.length/8);
  }

  

  const setPx = () => {
    // 设置像素存储模式-是否预乘alpha值, 如果是canvas获取到的纹理，则需要设置这个值，默认为false
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    // 设置像素存储模式-是否翻转Y轴，即图片是否要进行上下翻转，默认false
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    // 设置像素存储模式-设置是否进行颜色空间转换，默认值：BROWSER_DEFAULT_WEBGL
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.BROWSER_DEFAULT_WEBGL);
    // 控制像素颜色与已经存在的颜色，要如何混合在一起
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  }


  const drawText = (points, options) => {
    const { text } = options
    // 将顶点数据存储到缓冲器中
    gl.bindBuffer(gl.ARRAY_BUFFER, textBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 20, 0);
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 20, 12);

    // 将Canvas转换为图像数据
    const textCanvas = getTextCanvas(text)
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    // 将图像数据上传到WebGL
    setTexture(textCanvas)

    gl.useProgram(textProgram);
    gl.uniformMatrix4fv(textProjMt, false, new Float32Array(project));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  const updateText = () => {
    
  }

  return {
    KidarGL,
    ctx: gl,
    clearScene,
    loadImgTexture,
    drawPoints,
    updateBuffer,
    drawText,
  }
}

// const viewMt = gl.getUniformLocation(pointsProgram, "viewMt");
  // const modeMt = gl.getUniformLocation(pointsProgram, "modeMt");
  // const drawPoint = (options) => {
  //   const pointsLen = 3
  //   const { data, colorData, color, size, type,
  //     rx, ry, rz, 
  //     ox, oy, oz,
  //     mx=1, my=1, mz=1
  //   } = options
  //   gl.vertexAttrib4f(vsColor, ...color);
  //   // 将顶点数据存储到缓冲器中
  //   // const positionBuffer = gl.createBuffer();
  //   // gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  //   // gl.bufferData(gl.ARRAY_BUFFER, cobArray(data, colorData), gl.STATIC_DRAW);
  //   initPositionBuffer(gl, data)
  //   gl.enableVertexAttribArray(vertexPosition);
  //   gl.enableVertexAttribArray(vertexColor);
  //   // 3*4 + 4*4 = 16
  //   gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 28, 0);
  //   gl.vertexAttribPointer(vertexColor, 4, gl.FLOAT, false, 28, 12);
  //   gl.useProgram(pointsProgram);

  //   const project = getScreenMt(w, h)
  //   const view = getPerspectiveMt(4,-1, 5, -1, 10, 200)
  //   gl.uniformMatrix4fv(projMt, false, new Float32Array(project));
  //   gl.uniformMatrix4fv(viewMt, false, new Float32Array(view));
  //   const model = transformMt({rx, ry, rz, ox, oy, oz, mx, my, mz})
  //   gl.uniformMatrix4fv(modeMt, false, new Float32Array(model));
  //   gl.drawArrays(getType(gl, type), 0, data.length);
  // }