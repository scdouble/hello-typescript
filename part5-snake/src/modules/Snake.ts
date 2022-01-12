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

    if (value < 0 || value > 290) {
      // 蛇が壁に当たる Error throw
      throw new Error("Wall hit");
    }

    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      // 進む方向と逆に進む
      if (value > this.X) {
        //新しい値＞旧値→蛇は右に進んでいるここuターンする
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    //体を動かす
    this.moveBody();
    this.head.style.left = value + "px";

    // 体に当たっているかをチェック
    this.checkHeadBody();
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }

    if (value < 0 || value > 290) {
      // 蛇が壁に当たる
      throw new Error("Wall hit");
    }

    // Uターンをさせない
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    //体を動かす
    this.moveBody();
    this.head.style.top = value + "px";

    // 体に当たっているかをチェック
    this.checkHeadBody();
  }

  // 蛇の体が長くなる方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 体を動かす
  moveBody() {
    /**
     * 後ろの体から前に動かす
     * 四番目　＝　三番目
     * 三番目＝二番目
     * 二番目＝頭
     */
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 前の体の位置をを取得
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 前の体の位置を今の体に付与
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }

  // 頭が体に当たるかをチェック
  checkHeadBody() {
    // からだ全部を取得して、
    for (let i = 1; i < this.bodies.length; i++) {
      if (
        this.X === (this.bodies[i] as HTMLElement).offsetLeft &&
        this.Y === (this.bodies[i] as HTMLElement).offsetTop
      ) {
        throw new Error("body hit");
      }
    }
  }
}

export default Snake;
