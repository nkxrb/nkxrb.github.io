import { 
  getContext, initProgram, initPositionBuffer,
  clear, getTextCanvas, getScreenMt
} from './webglUtils'
import {vsSource_points, fsSource_color, vsSource_text, fsSource_text} from './constant'

export const useWebglRender = (canvas, type?) => {

  const KidarGL = {
    contextType: type
  }
  let {gl, w, h} = getContext(canvas, type);
  const version = gl.getParameter(gl.VERSION)
  const pointSizeRange = gl.getParameter(gl.POINT_SIZE_RANGE)
  const aspect = w/h
  console.log(version, pointSizeRange);

  const pointsProgram = initProgram(gl, vsSource_points, fsSource_color)
  const vertexPosition = gl.getAttribLocation(pointsProgram, 'a_position')
  const vertexSize = gl.getAttribLocation(pointsProgram, 'a_size')
  const vertexColor = gl.getAttribLocation(pointsProgram, 'a_color')
  const projMt = gl.getUniformLocation(pointsProgram, "projMt");
  const project = getScreenMt(w, h)

  const clearScene = () => {
    clear(gl)
  }

  const drawPoints = (points) => {
    if(!points || points.length === 0) return
    // console.log(points.length)
    initPositionBuffer(gl, points)
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

  const drawText = (points, options) => {
    const pointsLen = 2
    const { color, size, text } = options
    const textProgram = initProgram(gl, vsSource_text, fsSource_text)

    const aPosition = gl.getAttribLocation(textProgram, 'a_position')
    const aTexCoord = gl.getAttribLocation(textProgram, 'a_texCoord')
    const projMt = gl.getUniformLocation(textProgram, "projMt");
    const project = getScreenMt(w, h)

    // 将顶点数据存储到缓冲器中
    const positionBuffer = initPositionBuffer(gl, points)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(aPosition);
    gl.enableVertexAttribArray(aTexCoord);
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 20, 0);
    gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 20, 12);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // 将Canvas转换为图像数据
    const textCanvas = getTextCanvas(text)
    // 将图像数据上传到WebGL
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // 将画布内容作为纹理绑定到WebGL矩形上
    // console.log(textCanvas.width, textCanvas.height)
    // document.body.appendChild(textCanvas)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.useProgram(textProgram);
    gl.uniformMatrix4fv(projMt, false, new Float32Array(project));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    

    

    // 设置纹理参数
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  }

  return {
    KidarGL,
    ctx: gl,
    clearScene,
    drawPoints,
    drawText,
  }
}