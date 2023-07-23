import {useWebglRender} from './useDraw'

export const useRender = (canvas, options) => {
  const { texImgUrl } = options
  const {drawPoints, clearScene, drawText, updateBuffer, loadImgTexture} = useWebglRender(canvas)
  let i = 1;
  const renderAll = (points) => {
    // 
    clearScene();
    if(i === 1){
      texImgUrl && loadImgTexture(texImgUrl)
      drawPoints(points)
      i = 2
    }else{
      updateBuffer(points)
    }
    drawText([
      100, 100, 10, 0,0,
      180, 100, 10, 1,0,
      100, 180, 10, 0,1,
      180, 180, 10, 1,1,
    ], {text: '阿达'+ (i++)})
  }

  return {
    renderAll
  }
}