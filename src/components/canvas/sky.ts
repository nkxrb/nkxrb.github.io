import BaseCanvas from './BaseCanvas'
class Sky extends BaseCanvas {
  constructor(el: HTMLCanvasElement) {
    super(el)
    this.ctx && this.draw(this.ctx)
  }

  draw(ctx: CanvasRenderingContext2D) {
    const subH = Math.floor(this.height * 2 / 3)
    const subW = this.width / 4

    let skyColor: CanvasGradient = ctx.createLinearGradient(subW, 0, subW, subH)
    skyColor.addColorStop(0, '#1a3a4e');
    skyColor.addColorStop(0.25, '#1e3a4b');
    skyColor.addColorStop(0.5, '#29383e');
    // skyColor.addColorStop(0.65, '#5d3b1e');
    skyColor.addColorStop(0.75, '#2f383c');
    skyColor.addColorStop(1, '#111');

    ctx.fillStyle = skyColor;
    ctx.fillRect(0, 0, this.width, subH);

    // 画弧线，草坪
    let r = Math.floor(4 * (this.height * this.height / 16 + this.width * this.width / 4) / this.height)
    let cx = this.width / 2
    let cy = this.height + r - this.height / 4

    let landColor: CanvasGradient = ctx.createRadialGradient(this.width, subH, 0, subW, this.height, r)
    landColor.addColorStop(0, '#354e18');
    landColor.addColorStop(0.25, '#3c2818');
    landColor.addColorStop(0.5, 'green');
    landColor.addColorStop(0.75, '#17100a');
    landColor.addColorStop(1, '#111');

    ctx.fillStyle = landColor;
    ctx.beginPath()
    ctx.moveTo(0, subH)
    ctx.quadraticCurveTo(0, subH - this.height / 6, 160, subH + this.height / 8)

    ctx.quadraticCurveTo(300, subH + this.height / 4, 450, this.height * 7 / 8)
    // ctx.quadraticCurveTo(this.width * 5 / 6, subH + this.height / 4, this.width, subH / 2)

    ctx.lineTo(this.width, this.height)
    ctx.lineTo(0, this.height)
    ctx.fill()

  }
}


export default Sky