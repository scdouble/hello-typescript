class Dog {
  // 属性を定義
  age: number;
  name: string;
  // コンストラクタはInstance生成時に実行される
  constructor(name: string, age: number) {
    // インスタンスメソッドの中ではthisは現在の自分自身のオブジェクトを指す
    // コンストラクタの中で、thisを使って属性を付与できる
    // console.log(this);
    this.name = name;
    this.age = age;
  }

  bark() {
    // alert("wan wan");
    // メソッドの中でthisは実行元のオブジェクトを取得できる
    console.log(this)
    console.log(this.name)
  }
}

const dog = new Dog("hei", 3);
const dog2 = new Dog("bai", 3);

console.log(dog);
console.log(dog2);

dog.bark();
dog2.bark();
