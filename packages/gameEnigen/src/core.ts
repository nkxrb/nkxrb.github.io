import {useRender} from './render'
import {useHandle} from './handle'
import {useVoice} from './voice'

export interface KidarGEOption {

}

export const useKidarGE = (canvas, data, options) => {
  console.log(231)
  // 渲染初始化
  const { renderAll } = useRender(canvas, options);
  // 操作控制事件初始化
  const { points, initPoints, updatePoints, status, start, stop } = useHandle();
  // 音效同步初始化
  const {} = useVoice();

  const initGE = () => {
    console.log('init')
  }

  initPoints(data);

  const onUpdate = (callback) => {
    window.requestAnimationFrame(()=>{
      if(status.action){
        if(callback){
          callback(updatePoints)
        }
        renderAll(points);
      }
      onUpdate(callback)
    })
  }

  return {
    initGE,
    onUpdate,
    updatePoints
  }
}