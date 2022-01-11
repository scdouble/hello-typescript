// 即時実行の関数を作成して、tsが複数ファイルに渡って同じ変数を利用できないようにする検査を回避するため
// 即時実行関数を定義すると変数のスコープを別にすることができるので
(function () {
  // animal classを定義
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("bark bark");
    }
  }

  /**
   * Dog extends Animal
   * - Animalは親クラス、Dogは子クラス
   * - 継承すると、子クラスは親クラスの属性とメソッドを持つことになる
   * - 継承すると、複数の　子クラスが共通で親クラスのコードを活用できるようになる
   * - 親クラスがない属性は直接子クラスで定義できる
   * - 子クラスの中で親クラスと同名のメソッドを追加すると、親のメソッドの機能を上書きできる
   */
  // DogクラスはAnimalクラスを継承
  class Dog extends Animal {
    run() {
      console.log(`${this.name} is running~`);
    }
    sayHello(): void {
        console.log("wang")
    }
  }

  // DogクラスはAnimalクラスを継承
  class Cat extends Animal {
    sayHello(): void {
        console.log("miao")
    }
  }

  const dog = new Dog("xiao hei", 5);
  const cat = new Cat("xiao bai", 3);

  console.log(dog);
  console.log(cat);
  dog.sayHello();
  cat.sayHello();
  dog.run();
})();
