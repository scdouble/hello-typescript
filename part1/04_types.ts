// objectはJSのオブジェクト
let a: object;
a = {};
a = function () {};

// {}はObjectの中で指定する属性を決める時に使う
// 属性名の後に？をつけると属性が必須じゃなくてOKになる
let b: { name: string; age?: number }; //ここで定義している属性以外は追記できない
b = { name: "suwukong" };

// 任意の属性を定義したいときは[propName: string]のように書く
let c: { name: string; [propName: string]: any };
c = { name: "abc", a: 1, b: 2, age: 18, gender: "male" };

/**
 * アロー関数のような形で関数の型を制限
 * (パラメータ：型,パラメータ:方) => Return
 */
let d: (a: number, b: number) => number;
d = function (n1, n2): number {
  return n1 + n2;
};

/**
 * Array型の制限
 */

// string型のArray
let e: string[];
// e = ["e", "a", 1];　//Error
e = ["e", "a"];
//　数値型のArray
let f: number[];
f = [1, 2, 4];
//　数値型のArray
let g: Array<number>;

/**
 * タプル固定長のリスト。Arrayより効率が良い。Arrayの長さが固定であればタプルを利用する
 */

let h: [string, string];
h = ["hello", "abc"];

// h = ["hello", ]; // Error
// h = ["hello", 123]; //Error

/**
 * enum
 * データの値の可能性を先に列挙しておく
 */
enum Gender {
  Male = 0, // =0は書かなくても良い
  Female = 1,
}
let i: { name: string; gender: Gender };
i = {
  name: "sunwukong",
  gender: Gender.Male,
};

console.log(i.gender === 1);
console.log(i.gender === Gender.Male);

// jの型がstringかつ数値を同時満たす
// 二つのObjectを繋げられる
let j: string & number;
let j1: { name: string } & { age: number };
j1 = { name: "abc", age: 12 };

// 型の別名
type myType = string;
let k: 1 | 2 | 3 | 4 | 6;
let l: 1 | 2 | 3 | 4 | 6;

type myType1 = 1 | 2 | 3 | 4 | 6;
let k1: myType1;
let l1: myType1;
let m1: myType1;

k = 2