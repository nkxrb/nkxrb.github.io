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