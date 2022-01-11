// 抽象クラス
(function () {
  // objectの型を定義
  type myType = {
    name: string;
    age: number;
    [propname: string]: any;
  };
  //   type myType ={} // Error同じtypeを定義できない

  /**
   * Interfaceは型の構造を定義.
   * 型の属性とメソッドを定義。
   * 型として変数宣言でも利用できる
   */

  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    // interfaceは同名のものを定義できる
    gender: string;
  }

  const obj1: myType = {
    name: "sss",
    age: 111,
  };

  const obj2: myInterface = {
    name: "sss",
    age: 111,
    gender: "male",
  };

  /**
   * Interfaceはクラスを制限できる。
   * 一部はabstractに似てる。
   * Interfaceの中はメソッドを実装できない
   */
  interface myInter {
    name: string;
    sayHello(): void;
  }

  // クラスでInterfaceの要求を満たすように実装する
  class MyClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log("Hello");
    }
  }
})();
