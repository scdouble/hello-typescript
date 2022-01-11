// 抽象クラス
(function () {
  /**
   * 抽象クラスはInstanceを生成できない。
   * 抽象クラスは継承されるためにある
   *
   * 抽象クラスの中に抽象メソッドを定義できる
   */
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    // 抽象メソッドを定義
    // 抽象メソッドに方法自体の定義はない。
    // 子クラスは必ず抽象メソッドを定義しなければならない
    abstract sayHello():void;
  }

  class Dog extends Animal {
    // クラス
    sayHello(): void {
      console.log("wang wang wang ");
    }
  }

  // class Cat extends Animal{} // Error抽象メソッドsayHelloを実装していないのでエラーになる
  const dog = new Dog("wang");
  dog.sayHello();

  // let an = new Animal("snake");　//Error抽象くらいはInstanceを生成できない
})();
