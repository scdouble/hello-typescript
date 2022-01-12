// スコアパネル
class ScorePanel {
  // score levelは点数とレベルを記録
  score = 0;
  level = 1;

  // 点数とレベルのHTML要素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // レベルの制限
  maxLevel: number;
  // レベルが上がる点数の閾値を設定
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // scoreを足す方法
  addScore() {
    // scoreを増加
    this.score++;
    this.scoreEle.innerHTML = this.score + "";
    // 点数の条件を判断
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    // レベルの上限を設定
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

//   // test
//   const sp = new ScorePanel(10,2);

//   for (let i = 0; i < 100; i++) {
//     sp.addScore();
//   }

export default ScorePanel;
