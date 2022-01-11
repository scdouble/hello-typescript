// function fn(a: any): any { // パラメータのany と　返り値のanyが同じ型であることはここではわからない
//   return a;
// }

/**
 *
 * 関数とクラスを定義する時に型が不確定の時にジェネリック型を利用する
 *
 */

// anyを使わずに済む
function fn<T>(a: T): T {
  return a;
}

// 直接実行できる
let result = fn(10); // ts が自動で型を判別して
let result2 = fn<string>("hello"); // 手動で型を指定

// ジェネリック型は複数を指定できる
function fn2<T, K>(a: T, b: K) {
  console.log(b);
  return a;
}

fn2<number, string>(123, "aaa");

// ジェネリック型の範囲を制限
interface Inter {
  length: number;
}

//ジェネリックTが必ずinterfaceを実装していることを保証
function fn3<T extends Inter>(a: T): number {
  return a.length;
}

fn3({ name: "hello", length: 10 });
fn3("123");

//ジェネリック型をClassで使う
class myClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

const mc = new myClass<string>("song!");
