//餌のクラス定義
class Food {
    //　htmlエレメント表す属性
    element: HTMLElement;
    constructor() {
      // webページの中のエレメントを取得する
      this.element = document.getElementById("food")!;
    }
    // 餌のｘ軸のメソッド
    get X() {
      return this.element.offsetLeft;
    }
    get Y() {
      return this.element.offsetTop;
    }
  
    // 餌の位置を変更するメソッド
    change() {
      // ランダム位置を生成
      // 餌の位置の最小は0, 最大は290
      // 蛇は一回の移動で10px進むので、餌の位置も10pxごとで置かなければいけない
      let top = Math.round(Math.random() * 29) * 10;
      let left = Math.round(Math.random() * 29) * 10;
  
      this.element.style.top = top + "px";
      this.element.style.left = left + "px";
    }
  }
  
  // test
  // const food = new Food();
  // console.log(food.X, food.Y);
  // food.change();
  // console.log(food.X, food.Y);
  

  export default Food