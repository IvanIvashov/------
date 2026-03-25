(function () {
  var variable1 = (variable2 = 3);
})();
console.log("1.1", typeof variable1);
console.log("1.2", typeof variable2);
//--------------------------------------
var myObject = {
  value: 1,
  printVal: function () {
    var self = this;
    console.log("2.1", this.value);
    console.log("2.2", self.value);
    (function () {
      console.log("2.3", this.value);
      console.log("2.4", self.value);
    })();
  },
};
myObject.printVal();
//---------------------------------------------
console.log("3", 0.1 + 0.2 === 0.3);
//---------------------------------------------
var arr1 = "john".split("");
var arr2 = arr1.reverse();

arr2.splice(arr2.length - 1, 1);

console.log("5.1", arr1.slice(-1));
console.log("5.2", arr1.length);
console.log("5.3", arr2.slice(-1));
console.log("5.4", arr2.length);
//---------------------------------------------
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log("6", y);
//---------------------------------------------
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log("7", output);
//---------------------------------------------
var Employee = {
  company: "myCompany",
};

var emp1 = Object.create(Employee);
delete emp1.company;

console.log("8", emp1.company);
//---------------------------------------------
function test() {
  console.log("9.1", a);
  console.log("9.2", foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
//---------------------------------------------
console.log("10.1", true + false);
console.log("10.2", "" + 1);
console.log("10.3", null + 1);
console.log("10.4", undefined + 1);
//---------------------------------------------
async function env() {
  async function test() {
    window.document.body.style.backgroundColor = "black";
  }

  const result = await test();
  console.log("11", result);
}

env();
//---------------------------------------------
("use strict");

var name = "Alice";
var object = {
  name: "Bob",
  prop: {
    name: "Charlie",
    getName: function () {
      return this.name;
    },
  },
};

console.log("12.1", object.prop.getName());
var test = object.prop.getName;
console.log("12.2", test());
//---------------------------------------------
const a = "0";
if (a) {
  console.log("13", 1);
} else {
  console.log("13", 2);
}
//---------------------------------------------
console.log("14.1", 1 && null && 2);
console.log("14.2", null || (2 && 3) || 4);
//---------------------------------------------
console.log("16.1", typeof function empty() {});
console.log("16.2", typeof []);
console.log("16.3", typeof null);
console.log("16.4", typeof class A {});
console.log("16.5", typeof NaN);
//---------------------------------------------
let tvShow = "KBH";
tvShow[1] = tvShow[2] = tvShow[3];
console.log("17", tvShow);
//---------------------------------------------
let batman = {
  address: { city: "Gotham" },
};
let robin = {
  address: batman.address,
};
batman.address = { city: "Ibiza" };
console.log("18", robin.address.city);
//---------------------------------------------
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject(4);

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2]);
  const group2 = await Promise.all([promise3, promise4]);
  return [group1, group2];
};

promiseAll()
  .then((r) => console.log("19.1", r))
  .catch((r) => console.log("19.2", r));
