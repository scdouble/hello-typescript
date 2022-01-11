"use strict";
// 抽象クラス
(function () {
    const obj1 = {
        name: "sss",
        age: 111,
    };
    const obj2 = {
        name: "sss",
        age: 111,
        gender: "male",
    };
    // クラスでInterfaceの要求を満たすように実装する
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("Hello");
        }
    }
})();
