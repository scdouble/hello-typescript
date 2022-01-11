let a = 10;

console.log(a);

function fn2(this: Window) {
  alert(this); //このThisの指向は不確定
}

let box1 = document.getElementById("box1");
if (box1 != null) {
  box1.addEventListener("click", function () {
    alert("hello");
  });
}

box1?.addEventListener("click", function () {
  alert("box1");
});
