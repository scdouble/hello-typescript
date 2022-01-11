// classを使ってクラスを定義する
/**
 * クラスの中には属性とメソッドがある
 */
class Person {
  // インスタンス属性を定義できる
  // ここの属性はInstanceのみで確認できる。newしたあとしか見れない
  // readonly は読み取り専用の属性にする
  name: string = "son go kuu"; //read onlyにする
  ang: number = 18;

  // staticを使うとクラス属性を定義できる
  static readonly age: number = 19;

  // クラスのメソッドを定義
  sayHello() {
    console.log("Hello");
  }

  //メソッドがStaticが付いているのなら、クラスからInstance生成しないで利用できる
  static sayHello() {
    console.log("Hello");
  }
}

const per = new Person();
console.log(per);
console.log(per.name); // クラスのインスタンスからアクセスする
console.log(Person.age); // Instanceを作らず直接クラスからアクセスできる
// per.name = "tom"; //読み取り専用で変更できない

per.sayHello();
Person.sayHello();
