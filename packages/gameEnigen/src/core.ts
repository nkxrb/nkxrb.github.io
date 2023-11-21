import {useRender} from './render'
import {useHandle} from './handle'
import {useVoice} from './voice'

/**
 * 固定画布尺寸： 7200
 */
export interface KidarGEOption {
  texImgUrl?: string,
}

export const useKidarGE = (canvas, data, options: KidarGEOption) => {
  // 渲染初始化
  const { renderAll } = useRender(canvas, options);
  // 操作控制事件初始化
  const { points, transparentPoints, initPoints, updatePoints, status, start, stop } = useHandle();
  // 音效同步初始化
  const {} = useVoice();

  const onInit = () => {
    console.log('init')
  }

  initPoints(data);
  let arr: any = [];

  const onUpdate = (callback) => {
    window.requestAnimationFrame(()=>{
      if(status.action){
        if(callback){
          callback(updatePoints)
        }
        arr = []
        // while(arr.length < 20000000){
        //   arr.push({id: arr.length})
        // }
        console.log(new Date().getTime())
        renderAll(points, transparentPoints);
      }
      onUpdate(callback)
    })
  }

  return {
    onInit,
    onUpdate,
    updatePoints
  }
}