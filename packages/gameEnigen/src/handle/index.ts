import { addEvent } from "../shared/interfaceApi";

export interface PointItem {
  body: number[],
  x: number,
  y: number,
  maxSize: number,
}


export const useHandle = () => {
  // 顶点集合
  const points: number[] = [];
  // UI弹窗合计，先进后出。
  const dialogList = [];
  const status = {
    action: true,
    loading: true,
  }

  const initPoints = (data: PointItem[]) => {
    points.length = 0
    if(data && data.length > 0){
      let idx = 0
      data.forEach(d=>{
        points.push(...d.body)
      })
    }
    status.loading = false;
  }

  const updatePoints = (data: number[]) => {
    points.length = 0
    points.push(...data);
  }

  const start = () => status.action = true;
  const stop = () => status.action = false;

  addEvent('click', ()=>{
    status.action = !status.action
  })

  return {
    status,
    points,
    start,
    stop,
    initPoints,
    updatePoints,
  }

}