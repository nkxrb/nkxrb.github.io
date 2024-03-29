import {useWebglRender} from './useDraw'

export const useRender = (canvas, options) => {
  const { texImgUrl } = options
  const {drawPoints, clearScene, drawTriangle, updateBuffer, loadImgTexture} = useWebglRender(canvas)

  texImgUrl && loadImgTexture(texImgUrl)

  const renderAll = (points, transparentPoints) => {
    clearScene();
    drawTriangle(points, transparentPoints)
  }

  return {
    renderAll
  }
}