class Moon {
  el: HTMLCanvasElement
  width: number
  height: number
  constructor(el: HTMLCanvasElement) {
    this.el = el
    this.width = el.width = document.body.offsetWidth;
    this.height = el.height = document.body.offsetHeight;
    const ctx = el.getContext("2d");
    if (ctx) {
      this.draw(ctx)
    }
  }
  draw(ctx: CanvasRenderingContext2D) {

  }
}
export default Moon