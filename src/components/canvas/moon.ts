import BaseCanvas from "./BaseCanvas";

class Moon extends BaseCanvas {
  size: number = 30
  constructor(el: HTMLCanvasElement) {
    super(el)
    this.ctx && this.draw(this.ctx)
  }
  draw(ctx: CanvasRenderingContext2D) {
    let hours = new Date().getHours()
    let x = this.width / 24 * (hours + 12)
    let y = 60
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.arc(x, y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    setInterval(() => { this.draw(ctx) }, 3600000)
  }
}
export default Moon