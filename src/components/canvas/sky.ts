import BaseCanvas from './BaseCanvas'
class Sky extends BaseCanvas {
  constructor(el: HTMLCanvasElement) {
    super(el)
    this.ctx && this.draw(this.ctx)
  }

  draw(ctx: CanvasRenderingContext2D) {
    let skyColor: CanvasGradient = ctx.createLinearGradient(this.width / 2, 0, this.width / 2, this.height * 3 / 4)
    skyColor.addColorStop(0, '#1a3a4e');
    skyColor.addColorStop(0.25, '#1e3a4b');
    skyColor.addColorStop(0.5, '#29383e');
    // skyColor.addColorStop(0.65, '#5d3b1e');
    skyColor.addColorStop(0.75, '#2f383c');
    skyColor.addColorStop(1, '#111');

    ctx.fillStyle = skyColor;
    ctx.fillRect(0, 0, this.width, this.height * 3 / 4);

    let landColor: CanvasGradient = ctx.createLinearGradient(this.width / 2, 0, this.width / 2, this.height * 3 / 4)
    landColor.addColorStop(0, '#111');
    landColor.addColorStop(0.25, '#3c2818');
    landColor.addColorStop(0.5, '#17100a');
    landColor.addColorStop(0.75, '#17100a');
    landColor.addColorStop(1, '#111');

    ctx.fillStyle = landColor;
    ctx.fillRect(0, this.height * 3 / 4, this.width, this.height);

  }
}


export default Sky