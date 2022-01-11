"use strict";
// function fn(a: any): any { // パラメータのany と　返り値のanyが同じ型であることはここではわからない
//   return a;
// }
/**
 *
 * 関数とクラスを定義する時に型が不確定の時にジェネリック型を利用する
 *
 */
// anyを使わずに済む
function fn(a) {
    return a;
}
// 直接実行できる
let result = fn(10); // ts が自動で型を判別して
let result2 = fn("hello"); // 手動で型を指定
// ジェネリック型は複数を指定できる
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, "aaa");
//ジェネリックTが必ずinterfaceを実装していることを保証
function fn3(a) {
    return a.length;
}
fn3({ name: "hello", length: 10 });
fn3("123");
//ジェネリック型をClassで使う
class myClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new myClass("song!");
