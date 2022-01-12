// 抽象クラス
(function () {
  class Person {
    // 属性の中で修飾子を付けられる
    /**
     * public 任意の位置で修正できる。デフォルト設定
     * private クラスの中でしかアクセスできない。継承されてもアクセスできない
     *  - クラスの中でメソッドを追加することでprivate属性をアクセスできるようにする
     * protected 保護された属性。定義されたクラスと継承した子クラスの中からアクセスできる
     */
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    // getメソッドを定義する
    /**
     *
     * getter 属性を読む
     * setter 属性を修正
     */
    // getName() {
    //   return this.name;
    // }
    // setName(value: string) {
    //   this.name = value;
    // }

    // getAge() {
    //   return this.age;
    // }

    // setAge(value: number) {
    //   // 年齢の判断
    //   if (value >= 0) {
    //     this.age = value;
    //   }
    // }

    // TSの中でgetterを作成する方法
    get name() {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }

    get age() {
      return this._age;
    }

    set age(value: number) {
      if (value >= 0) {
        this._age = value;
      }
    }
  }

  const per = new Person("son go ku", 18);
  console.log(per);

  class A {
    protected num: number;
    constructor(num: number) {
      this.num = num;
    }
  }
  class B extends A {
    test() {
      console.log(this.num);
    }
  }
  const b = new B(123);

  class C {
    // 属性とコンストラクタの簡単な声明の方法。シュガーシンタックス
    // this.name = name とか書かなくてもよい
    constructor(public name: string, public age: number) {}
  }

  const c = new C("xx", 11);
  console.log("c", c);
  /**
   * 属性は直接Instanceの中にあるので、任意で変更できる
   * 属性が任意に変更されると、objectのデータや状態が不安定になるので、安全ではない
   */
  //   per.name = "hakkai";
  //   per.age = -38;
  //   console.log(per.getName());

  //   per.setName("ba jie");

  //   console.log(per.getName());

  //   per.setAge(-66);
  //   console.log(per.getAge());

  console.log(per.name);
  per.name = "ba jie";
  console.log(per);
  per.age = 22;
  console.log(per);
})();
