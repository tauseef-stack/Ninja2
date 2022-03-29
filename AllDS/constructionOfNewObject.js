//Using Contructor function ==>
function myConstructor(a, b, c, d) {
  this.name = a;
  this.age = b;
  this.qualification = c;
  this.status = d;
}
let person1 = new myConstructor("tauseef", 27, "M.Tech", "Married");
person1.exp = "1Year";
console.log(person1);

//Using Existing Object ==>
let cat = {
  food: "nonVeg",
  size: "small",
  isDangerous: false,
  canJump: true,
};
let lion = Object.create(cat);
lion.size = "big";
lion.canJump = false;
console.log(lion.canJump); //Will not show property of cat in console but it is added in Its prototype ==>
