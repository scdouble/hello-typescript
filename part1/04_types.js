// objectはJSのオブジェクト
var a;
a = {};
a = function () { };
// {}はObjectの中で指定する属性を決める時に使う
// 属性名の後に？をつけると属性が必須じゃなくてOKになる
var b; //ここで定義している属性以外は追記できない
b = { name: "suwukong" };
// 任意の属性を定義したいときは[propName: string]のように書く
var c;
c = { name: "abc", a: 1, b: 2, age: 18, gender: "male" };
/**
 * アロー関数のような形で関数の型を制限
 * (パラメータ：型,パラメータ:方) => Return
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * Array型の制限
 */
// string型のArray
var e;
// e = ["e", "a", 1];　//Error
e = ["e", "a"];
//　数値型のArray
var f;
f = [1, 2, 4];
//　数値型のArray
var g;
/**
 * タプル固定長のリスト。Arrayより効率が良い。Arrayの長さが固定であればタプルを利用する
 */
var h;
h = ["hello", "abc"];
// h = ["hello", ]; // Error
// h = ["hello", 123]; //Error
/**
 * enum
 * データの値の可能性を先に列挙しておく
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "sunwukong",
    gender: Gender.Male
};
console.log(i.gender === 1);
console.log(i.gender === Gender.Male);
// jの型がstringかつ数値を同時満たす
// 二つのObjectを繋げられる
var j;
var j1;
j1 = { name: "abc", age: 12 };
var k;
var l;
var k1;
var l1;
var m1;
k = 2;
