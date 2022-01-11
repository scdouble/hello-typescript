"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("animal is barking~~~");
        }
    }
    class Dog extends Animal {
        // コンストラクタの中でageを初期化
        constructor(name, age) {
            // 子クラスの中でコンストラクタを書いたなら、必ず親クラスのconstructorを実行する
            // 同名のメソッドは親クラスのをOverrideするので...結果的に親クラスのコンストラクタが実行できず、後に名前を付与できない
            super(name); // 親クラスのコンストラクタを実行
            this.age = age;
        }
        sayHello() {
            // superは親クラスを表す
            // 子クラスの中で親クラスのInstanceを使うにはSuperを使えばよい
            super.sayHello();
        }
    }
    const dog = new Dog("wang", 12);
    dog.sayHello();
})();
