/**
 * 创建顶点着色器
 * @returns string
 */
function getVsSource() {
  return `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;
}

/**
 * 创建片段着色器
 * @returns string
 */
function getFsSource() {
  return `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
}

export function getVShader(gl: WebGLRenderingContext, source: string) {
  loadShader(gl, gl.VERTEX_SHADER, source)
}

export function getFShader(gl: WebGLRenderingContext, source: string) {
  loadShader(gl, gl.FRAGMENT_SHADER, source)
}

// 创建指定类型的着色器，上传source源码并编译
export function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  // Send the source to the shader object
  if (shader) {
    gl.shaderSource(shader, source);
    // Compile the shader program
    gl.compileShader(shader);
    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
  }
  return shader;
}