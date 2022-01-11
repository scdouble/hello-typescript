"use strict";
// 抽象クラス
(function () {
    /**
     * 抽象クラスはInstanceを生成できない。
     * 抽象クラスは継承されるためにある
     *
     * 抽象クラスの中に抽象メソッドを定義できる
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        // クラス
        sayHello() {
            console.log("wang wang wang ");
        }
    }
    // class Cat extends Animal{} // Error抽象メソッドsayHelloを実装していないのでエラーになる
    const dog = new Dog("wang");
    dog.sayHello();
    // let an = new Animal("snake");　//Error抽象くらいはInstanceを生成できない
})();
