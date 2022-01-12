class Snake {
  // 蛇の頭のHTML
  head: HTMLElement;
  // 蛇の体（蛇の頭も含む）
  bodies: HTMLCollection;
  // 蛇のDivを取得
  element: HTMLElement;
  constructor() {
    this.head = document.querySelector("#snake>div") as HTMLElement;
    this.element = document.getElementById("snake")!;
    this.bodies = this.element.getElementsByTagName("div")!;
  }

  // 蛇の座標を取得
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  // 蛇の頭の座標を設定
  set X(value: number) {
    this.head.style.left = value + "px";
  }
  set Y(value: number) {
    this.head.style.top = value + "px";
  }

  // 蛇の体が長くなる方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;