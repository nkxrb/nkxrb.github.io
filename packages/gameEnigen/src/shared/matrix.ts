// 实现一个vec4列向量*矩阵4*4 的乘法
//
export const vec4Matrix4 = (vec4, matrix4) => {
  const result: number[] = [];
  for (let i = 0; i < 4; i++) {
    let sum = 0;
    for (let j = 0; j < 4; j++) {
      sum += vec4[j] * matrix4[i * 4 + j];
    }
    result.push(sum);
  }
  return result;
}

// 4*4矩阵转置
export const transposeMatrix4 = (matrix4) => {
  const result: number[] = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result[i][j] = matrix4[j][i];
    }
  }
  return result;
}

// 4*4矩阵乘法
export const matrix4Multiply = (matrix4a, matrix4b) => {
  const result: number[][] = [[],[],[],[]];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        sum += matrix4a[i][k] * matrix4b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}