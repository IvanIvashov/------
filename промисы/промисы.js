// 3) На консоль логи
setTimeout(() => {
  console.log("timeout");
}, 0);

console.log(1);

new Promise((resolve) => {
  console.log("Promise");
  setTimeout(() => {
    console.log("777");
    resolve();
  }, 0);
})
  .then(() => {
    setTimeout(() => {
      console.log("then1");
    }, 0);
  })
  .then(() => {
    console.log("then2");
  });

console.log(4);

setTimeout(() => {
  console.log("timeOut2");
}, 0);

// --------------------------------------------
// задачка 2
// --------------------------------------------
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then((res) => {
  console.log(2);
});

console.log("end");

// --------------------------------------------
// задачка 3
// --------------------------------------------
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");

// --------------------------------------------
// задачка 4
// --------------------------------------------
const promise = new Promise((resolve, reject) => {
  reject("Ошибка!");
});

promise
  .then((result) => console.log("Успешно:", result))
  .catch((error) => console.log("Ошибка:", error));

// --------------------------------------------
// задачка 5
// --------------------------------------------
const promise = new Promise((resolve, reject) => {
  reject("Ошибка!");
});

promise
  .then(
    (res) => console.log("Then1:", res),
    (res) => console.log("Then2:", res),
  )
  .catch((error) => console.log("Ошибка:", error));

// --------------------------------------------
// задачка 6
// --------------------------------------------
Promise.resolve("A")
  .then((res) => res + "B")
  .then((res) => res + "C")
  .catch((res) => res + "D")
  .then((res) => res + "E")
  .finally((res) => res + "F")
  .then((res) => console.log(res)); // ?
