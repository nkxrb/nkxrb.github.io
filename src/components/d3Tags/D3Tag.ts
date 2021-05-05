const TAGS_CACHE: Tag[] = []

export declare interface TagBallOption {
  width: number,
  height: number,
  radius: number // 球半径
  focalLength: number // 焦距
}
declare type TagBall = TagBallOption

class Tag {
  el: HTMLElement;
  ball: TagBall;
  x: number;
  y: number;
  z: number;
  constructor(el: HTMLElement, x: number, y: number, z: number, ball: TagBall) {
    this.el = el
    this.ball = ball
    this.x = x
    this.y = y
    this.z = z
  }
  move() {
    let scale = this.ball.focalLength / (this.ball.focalLength - this.z);
    let alpha = (this.z + this.ball.radius) / (2 * this.ball.radius);
    let left = this.x + this.ball.width / 2 - this.el.offsetWidth / 2 + "px";
    let top = this.y + this.ball.height / 2 - this.el.offsetHeight / 2 + "px";
    let transform = "translate(" + left + ", " + top + ") scale(" + scale + ")";
    this.el.style.opacity = (alpha + 0.5).toString();
    this.el.style.zIndex = Math.ceil(scale * 100).toString();
    this.el.style.transform = transform;
  }
}

export function init(tagEls: Array<HTMLElement>, tagBallEl: HTMLElement, options?: TagBallOption) {
  const tagsCache: Tag[] = []
  const radius = options ? options.radius || 200 : 200
  const tagBall: TagBall = {
    height: tagBallEl.offsetHeight,
    width: tagBallEl.offsetWidth,
    radius: 200,
    focalLength: 500
  }

  for (let i = 0; i < tagEls.length; i++) {
    // 配置字体随机颜色
    tagEls[i].style.color = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
    // 获取-1，1之间的值，将标签进行平均分配
    let k = -1 + (2 * (i + 1) - 1) / tagEls.length;
    /**
     * 根据公式：x=r*sinθ*cosΦ   y=r*sinθ*sinΦ   z=r*cosθ;
     * 其中θ对应a，Φ对应b，x,y,z为分布在球面上的坐标点，都是相对于球心的
     */
    let a = Math.acos(k); // 求反余弦，得到角度θ
    let b = a * Math.sqrt(tagEls.length * Math.PI);
    let x = radius * Math.sin(a) * Math.cos(b);
    let y = radius * Math.sin(a) * Math.sin(b);
    let z = radius * Math.cos(a);

    let t = new Tag(tagEls[i], x, y, z, tagBall);
    tagsCache.push(t);
    t.move();
  }

  run(tagsCache, tagBall.focalLength)
}

function rotateX(tags: Tag[], r: number) {
  let cos = Math.cos(Math.PI / 500);
  let sin = Math.sin(Math.PI / 500);
  tags.forEach(function (item) {
    let y1 = item.y * cos - item.z * sin;
    let z1 = item.z * cos + item.y * sin;
    item.y = y1;
    item.z = z1;
  });
}

function rotateY(tags: Tag[], r: number) {
  let cos = Math.cos(Math.PI / r);
  let sin = Math.sin(Math.PI / r);
  tags.forEach(function (item) {
    let x1 = item.x * cos - item.z * sin;
    let z1 = item.z * cos + item.x * sin;
    item.x = x1;
    item.z = z1;
  });
}

export function run(tags: Tag[], r: number) {
  rotateX(tags, r);
  rotateY(tags, r);
  tags.forEach(item => {
    item.move();
  });

  requestAnimationFrame(() => { run(tags, r) });
}