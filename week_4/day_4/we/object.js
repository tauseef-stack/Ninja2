var person = {
    name : "Tauseef",
    age : 27,
    isMarried : true,
    hobbies : ["Learning","footBall"],
    hello : function() {           //if object contains function as key it becomes "method".
        console.log("Hello World")
    },
};
person.heigth = "6ft"; // it will be pushed to the object as key_value at the end.
person.name = "Shariq"; /* it will not push shariq into object bcoz key already has 
                           name key and key value must be unique so it will replace the name value'*/
 person.greet = function() {
 console.log("Hi Everyone");
                        };                          
//delete person.hobbies; // it will delete onr key of object with value .


console.log(person)
console.log(person["isMarried"]) // first method of calling object property.
console.log(person.isMarried)  // second method of calling object property.
console.log(person.hobbies)
console.log(person.hobbies[1])
person.hello(); // it will call key value function of object called METHOD.
 for (key in person) {  // for loop to get KEYS in object
     console.log(key)
 }
 for (key in person) {  // for loop to get type of KEYS in object not type of its elements,
    console.log(typeof key)
}
