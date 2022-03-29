//Way of declaring function ===>
function normalWay() {
  var i = 0;
  console.log(i);
}
var fuuc = function () {
  return "tauseef";
};

let myArrow = () => {
  return "tauseef";
};
//This key word in object ==>
let obj1 = {
  i: 20,
  get: function () {
    console.log(this.i);
  },
};
obj1.get();
let obj2 = {
  i: 50,
  get: () => {
    console.log(this);
  },
};
obj2.get();

//Array shorthand For loop =>
// let arr = [, 1, 2, 3, 4, 5, 6, 7];
// for (let ele of arr) {
//   console.log(ele);
// }

//Destructuring of objects==>
let obj3 = {
  name: "Tauseef",
  age: 28,
  city: "Bhiwandi",
};
let { name: myName, age, city } = obj3;
console.log(myName, age, city);
///nested Objects ==>
let obj4 = {
  name: "Shariq",
  info: {
    age: 28,
    cityA: "Bhiwandi",
  },
};
let {
  info: { cityA: myCity },
} = obj4;
console.log(myCity);

//Object as arguments in ffunnctionn react ==>
function myObj({ name, info: { age: myAge } }) {
  console.log(name, myAge);
}
myObj(obj4);

//Destructuring array and objects usingg rest operator ==>
let obj5 = {
  name: "Tauseef",
  class: "12th",
  email: "t@t.com",
  pass: "Tauseef@1234",
  cityA: "Bhiwandi",
};
let { pass, ...x } = obj5; //key name matters
console.log(x);

let arr2 = [1, 2, 3, 4, 5, 6, 7];
let [, , a, ...xx] = arr2; ///sequence matters ==>
console.log(a, xx);

//Spread operator  ==> merging array and oobjects  ==>
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [...arr3, ...arr4, 8, 9, 0, 12];
console.log(arr5);

let obj6 = { ...obj4, ...obj5 };
console.log(obj6);

function arrArg(w, ...a) {
  console.log(a);
}
arrArg(1, 2, 3, 4, 5, 6);

//Class Costrunctor of Stack ==>

function ArrayConstructor() {
  let length = 0;
  let arr = [];
  this.push = function (...v) {
    arr = [...arr, ...v];
    length += v.length;
    console.log(arr, length);
  };
  this.pop = function () {
    arr.pop();
    length--;
    console.log(arr, length);
  };
}

let obj = new ArrayConstructor();
console.log(obj);
obj.push(1, 2, 3, 4, 5);
obj.pop();
