var person = {
  name: "Maryam",
};
function Marro(a, b, c) {
  this.age = 24;
  this.color = "fair";
  this.weight = 46 + "kg";
  this.iQ = "low";
  this.study = a;
  this.status = b;
  this.child = c;
}
// Marro.call(person, "graduate", "Maried", "Yusuf");
// console.log(person);
// Marro.apply(person, ["gard", "marry", "taklu"]);
// console.log(person);

// console.log(person);
// var mar = Marro.bind(person, "12th", "3yearsBefre", "2.5year");
// console.log(mar);
// mar(); //can be called anywhere.
// console.log(person);

//Factory As a function.
var mar = new Marro("12th", "3yearsBefre", "2.5year"); // Make Object Factory.
console.log(mar);

//Object Mutability And It's Prevention.
Object.freeze(person); //After This neither Addition nor Mutation applicable
person.age = 23;
person.name = "mariya";

Marro.apply(person, ["gard", "marry", "taklu"]);
console.log(person);

//Creation of Object Using Object.create Method,
