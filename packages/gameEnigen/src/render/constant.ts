// gl.POINTS: 绘制一系列点。
// gl.LINE_STRIP: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
// gl.LINE_LOOP: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
// gl.LINES: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
// gl.TRIANGLE_STRIP: 绘制一个三角带。
// gl.TRIANGLE_FAN: 绘制一个三角扇。
// gl.TRIANGLES: 绘制一系列三角形。每三个点作为顶点。
/**
 * gl_PointSize   float 点渲染模式，方形点区域渲染像素大小  
 * gl_Position    vec4  顶点位置坐标                    
 * gl_FragColor   vec4  片元颜色值                      
 * gl_FragCoord   vec2  片元坐标，单位像素                
 * gl_PointCoord  vec2  点渲染模式对应点像素坐标          
 */

// modeMt
export const getType = (gl, type) => {
  const map = {
    points: gl.POINTS,
    line_strip: gl.LINE_STRIP,
    line_loop: gl.LINE_LOOP,
    lines: gl.LINES,
    triangle_strip: gl.TRIANGLE_STRIP,
    triangle_fan: gl.TRIANGLE_FAN,
    triangles: gl.TRIANGLES,
  }

  return map[type] || gl.POINTS
}

// OpenGL ES 3.0 顶点着色器
export const vsSource_points = `#version 300 es
precision mediump float;
uniform mat4 projMt;
layout(location=0) in vec3 a_position;
layout(location=1) in float a_size;
layout(location=2) in vec4 a_color;
out vec4 v_color;

void main() {
  gl_Position = vec4(a_position, 1.0) * projMt;
  v_color = a_color;
  gl_PointSize = a_size;
}
`

// vec4(uvs.xyz, v_color.w)
export const fsSource_points = `#version 300 es
precision mediump float;
in vec4 v_color;
layout(location=0) out vec4 o_fragColor;

void main() {
  o_fragColor = v_color;
}
`

// vec4(uvs.xyz, v_color.w)
export const fsSource_color = `#version 300 es
precision mediump float;
in vec4 v_color;
layout(location=0) out vec4 o_fragColor;

void main() {
  float r = distance(gl_PointCoord, vec2(0.5, 0.5));
  if(r<=0.5){
    vec3 uvs = v_color.xyz / 255.0;
    o_fragColor = vec4(1.0,0.5,0.19,1);
  }else{
    discard;
  }
}
`


export const vsSource3 = `#version 300 es
uniform mat4 projMt;
uniform mat4 viewMt;
uniform mat4 modeMt;
layout(location=0) in vec3 a_position;
layout(location=2) in vec4 a_color;
out vec4 v_color;

void main() {
  gl_Position = vec4(a_position, 1.0) * modeMt * projMt;
  v_color = a_color;
  gl_PointSize = 1.0;
}
`;
// OpenGL ES 3.0片段着色器
export const fsSource3 = `#version 300 es
precision mediump float;
in vec4 v_color;
layout(location=0) out vec4 o_fragColor;
void main() {
    o_fragColor = vec4(v_color);
}
`;

// OpenGL ES 3.0 顶点着色器
export const vsSource_texture = `#version 300 es
precision mediump float;
uniform mat4 projMt;
layout(location=0) in vec3 a_position;
layout(location=2) in vec2 a_texCoord;
out vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 1.0) * projMt;
  v_texCoord = a_texCoord;
}
`

// OpenGL ES 3.0片段着色器 texture(u_Sampler, normalize(v_texCoord));
export const fsSource_texture = `#version 300 es
#ifdef GL_ES
  precision mediump float;
#endif
uniform sampler2D u_Sampler;
in vec2 v_texCoord;
layout(location=0) out vec4 o_fragColor;

void main() {
  o_fragColor = texture(u_Sampler, v_texCoord);
}
`;
