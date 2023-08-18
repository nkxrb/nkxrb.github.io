export const bg = {
  points: [
    0, 0, 1000, 1.0, 0.945, 0.912, 1.0,
    0, 1242,
  ]
  // background-image: linear-gradient(to top, rgba(255,241,235,1) 0%, rgba(172,224,249,1) 100%);
}

export const getCircle = (x: number, y:number, r:number) => {
  const res: number[] = [];
  for(let i=0; i<2*r; i+=1){
    for(let j=0; j<r; j+=1){
      if((j*j + i*i) <= (r*r)){
        res.push(i+x, j+y, 10, 1, 0.5,0.4,0.5,1)
        res.push(i+x, -j+y, 10, 1, 0.8,0.4,0.5,1)
        res.push(-i+x, j+y, 10, 1, 0.2,0.4,0.1,1)
        res.push(-i+x, -j+y, 10, 1, 0.2,0.4,0.1,1)
        // j += 1
      }
    }
  }  

  // console.log(res)

  return res
}

const NUM_WIDTH = 12.5
const numMap = [
  [0.001, 1,  0.026,  1,  0.001,  0.96, 0.026,  0.96], // 0
  [0.026, 1,  0.051,  1,  0.026,  0.96, 0.051,  0.96], // 1
  [0.053, 1,  0.078,  1,  0.053,  0.96, 0.078,  0.96], // 2
  [0.080, 1,  0.105,  1,  0.080,  0.96, 0.105,  0.96], // 3
  [0.106, 1,  0.131,  1,  0.106,  0.96, 0.131,  0.96], // 4
  [0.132, 1,  0.157,  1,  0.132,  0.96, 0.157,  0.96], // 5
  [0.159, 1,  0.184,  1,  0.159,  0.96, 0.184,  0.96], // 6
  [0.184, 1,  0.209,  1,  0.184,  0.96, 0.209,  0.96], // 7
  [0.209, 1,  0.234,  1,  0.209,  0.96, 0.234,  0.96], // 8
  [0.236, 1,  0.261,  1,  0.236,  0.96, 0.261,  0.96], // 9
]

export const getNumber = (x, y, number) => {
  const arr = String(number).split('')

  const res: number[] = []
  let numPoint;
  arr.forEach((a, i)=>{
    numPoint = numMap[Number(a)]

    res.push(x+NUM_WIDTH*i, y, 0, numPoint[0], numPoint[1])
    res.push(x+NUM_WIDTH*i, y, 0, numPoint[0], numPoint[1])
    res.push(x+NUM_WIDTH*i+NUM_WIDTH, y, 0, numPoint[2], numPoint[3])
    res.push(x+NUM_WIDTH*i, y+20, 0, numPoint[4], numPoint[5])
    res.push(x+NUM_WIDTH*i+NUM_WIDTH, y+20, 0, numPoint[6], numPoint[7])
    res.push(x+NUM_WIDTH*i+NUM_WIDTH, y+20, 0, numPoint[6], numPoint[7])
  })
  return res;
}

export const getDialog = () => {
  return [
    
  ]
}