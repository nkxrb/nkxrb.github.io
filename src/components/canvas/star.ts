import BaseCanvas from "./BaseCanvas";

class Star extends BaseCanvas {
  size: number = 6
  nums: number = 60
  constructor(el: HTMLCanvasElement) {
    super(el)
    this.ctx && this.draw(this.ctx)
  }
  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.nums; i++) {
      let x = Math.ceil(Math.random() * this.width)
      let y = Math.ceil(Math.random() * 200)
      let r = Math.ceil(Math.random() * this.size)
      this.drawStar(ctx, x, y, r)
    }
  }
  drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
    let subp = r / this.size
    ctx.save()
    r = r - this.size / 70
    if (r < 0) {
      r = this.size
    }
    ctx.clearRect(x - r, y - r, r * 2, r * 2)
    ctx.beginPath()
    ctx.moveTo(x, y - r)
    ctx.lineTo(x - subp, y - subp)
    ctx.lineTo(x - r, y)
    ctx.lineTo(x - subp, y + subp)
    ctx.lineTo(x, y + r)
    ctx.lineTo(x + subp, y + subp)
    ctx.lineTo(x + r, y)
    ctx.lineTo(x + subp, y - subp)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.restore()

    requestAnimationFrame(() => { this.drawStar(ctx, x, y, r) })
  }
}

export default Star