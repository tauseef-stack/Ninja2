let name = {
  firstname: "Tauseef",
  lastname: "Ansari",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
name.printFullName();

//Function borrowing with changing this key word using Call==>
let name2 = {
  firstname: "Maryam",
  lastname: "Siddiqui",
};
name.printFullName.call(name2);

let name3 = {
  firstname: "Yusuf",
  lastname: "Khan",
  class: "KGB",
};
name.printFullName.call(name3);

function fullname(hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " , " + state
  );
}

fullname.call(name2, "Delhi", "Capital");
fullname.call(name3, "Mumbai", "Maharashtra");
fullname.apply(name2, ["Bhiwandi", "Malegoan"]);
fullname.apply(name3, ["Bhiwandi"]);

let myName = fullname.bind(name2, "Bhiwandi", "Maharastra");
console.log(myName);
myName();

//Currying using Bind // calling One function it returns a function ans again calling it we get the output==>
let multiply = function (x, y) {
  console.log(x * y);
};
let by2 = multiply.bind(this, 2, 3);
by2(5);
let by3 = multiply.bind(this, 3);
by3(10);

//Currying Using clousure ==>
function multiplyClosure(x) {
  return function (y) {
    console.log(x * y);
  };
}
let mby2 = multiplyClosure(2);
mby2(5);
let mby8 = multiplyClosure(8);
mby8(2);
multiplyClosure(10)(10);
