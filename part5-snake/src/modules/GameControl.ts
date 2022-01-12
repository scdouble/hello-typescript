// 他のクラスを制御するクラス
import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 蛇の移動方向を保管
  direction: string = "";
  // ゲームが終了しているかどうかを記録する変数
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    // this.keyDownHandler = this.keyDownHandler.bind(this)
    this.init();
  }

  // gameを初期化する
  init() {
    //eventを追加
    document.addEventListener("keydown", this.keyDownHandler.bind(this)); //thisは誰なのか
    // runを実行
    this.run();
  }

  /**
 *  ArrowUp 
    ArrowDown 
    ArrowLeft 
    ArrowRight
！！キーボードの上下左右はIEとChromeの値が違う。
    */
  //

  // keydownのコールバック方法
  keyDownHandler(event: KeyboardEvent) {
    // TODO　上下左右の値が入ってるかどうかを検査

    // directionを変更
    this.direction = event.key;
  }

  // 蛇の移動を制御する方法
  run() {
    /**
     * this.directionを元に蛇の位置を変える
     * 上　top値を減らす
     * した　topを追加
     * 左 left　減らす
     * 右　let 増加
     *
     */

    let X = this.snake.X;
    let Y = this.snake.Y;

    // 上下左右によってXYの値をKさん
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 上に動かす
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    // 蛇の位置の値を変更
    this.snake.X = X;
    this.snake.Y = Y;

    // timerをセット
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
}

export default GameControl;
