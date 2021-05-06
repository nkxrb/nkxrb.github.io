class BaseCanvas {
  el: HTMLCanvasElement
  width: number
  height: number
  ctx: CanvasRenderingContext2D | null
  constructor(el: HTMLCanvasElement) {
    this.el = el
    el.style.position = 'fixed'
    el.style.top = '0'
    el.style.left = '0'
    el.style.zIndex = '-1'

    this.width = el.width = document.body.offsetWidth;
    this.height = el.height = document.body.offsetHeight;
    const ctx = el.getContext("2d");
    this.ctx = ctx
  }
}

export default BaseCanvas