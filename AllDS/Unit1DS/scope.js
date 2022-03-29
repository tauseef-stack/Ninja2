var name = "Abhishek";

function init(){
    var age = 25; //local scope
    console.log(name); // Abhishek
    console.log(age);  // 25
}
init(); //can be called anywhere in progarm
console.log(name); // Abhishek
console.log(age); // ReferenceError: age is not defined