export interface Shape {
  x:number,
  y:number,
  z:number,
  size?: number,
  sizeOrigin?: string, // center, top, bottom, left, right,
  points: number[], // 包含坐标与纹理数据
  onClick?: () => void
}

export const getCube = (x: number, y: number, z: number, w: number, h?: number, d?: number) => {
  const x2 = x + w;
  const y2 = y + (h || w)
  const z2 = z - (d || w)

  const points = [
    x, y, z, 0.01, 0.01,
    x, y2, z, 0.01, 0.01,
    x2, y, z, 0.01, 0.01,

    x2, y, z, 0.01, 0.01,
    x, y2, z, 0.01, 0.01,
    x2, y2, z, 0.01, 0.01,

    x2, y2, z, 0.01, 0.05,
    x2, y, z, 0.01, 0.05,
    x2, y2, z2, 0.01, 0.05,

    x2, y2, z2, 0.01, 0.05,
    x2, y, z, 0.01, 0.05,
    x2, y, z2, 0.01, 0.05,
  ]

  const newCube = {
    x,y,z,points
  }
  return newCube
}

// export const ro

