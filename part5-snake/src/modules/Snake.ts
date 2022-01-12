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
    // 新しい値が現在の値と同じなら数値を変更しない
    if (this.X === value) {
      return;
    }

    if(value < 0 || value > 290){
        // 蛇が壁に当たる Error throw
        throw new Error("Wall hit")
    }
    this.head.style.left = value + "px";
  }
  set Y(value: number) {
    if (this.Y === value) {
      return;
    }

    if(value < 0 || value > 290){
        // 蛇が壁に当たる
        throw new Error("Wall hit")
    }

    this.head.style.top = value + "px";
  }

  // 蛇の体が長くなる方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
