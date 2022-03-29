//call Example ==>
//1) Borowing the function from One Object int another==>
let name = {
  firstName: "Tauseef",
  lastName: "Ansari",
  printFullName: function (home, city) {
    console.log(this.firstName + " " + this.lastName + " " + home + " " + city);
  },
};
name.printFullName();

let name2 = {
  firstName: "Maryam",
  lastName: "Ansari",
};
name.printFullName.call(name2);

let name3 = {
  firstName: "Zeenat",
  lastName: "Ansari",
};
name.printFullName.call(name3);

//Borrowing function with it's own arguments and passing parameter during call==>
name.printFullName("Maharashtra", "Bhiwandi");
name.printFullName.call(name2, "Malegon", "Maharashtra");
//The only diff in the call and appy is they need to call with the arguments as array instead
name.printFullName.apply(name3, ["Nasik", "Dehrdoon"]);
//Bind return the funnction not call the function for further use
let mar = name.printFullName.bind(name2, "Banglore", "karnataka");
mar();
//since bind doesnt call the function therefrore we can pass its arguments in nstallments =>

let zee = name.printFullName.bind(name3, "Shimla");
zee("himachal", "Sikkimm"); ///Extr argumnet ommmited
