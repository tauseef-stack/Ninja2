let person = {
    name: "tauseef",
    age: 27,
    852:false,
}

for (let key in person) {//Hoew to loop through in object..==> values using key key word...
    console.log(person[key]);
}

let keys = Object.keys(person);//Makes an array of keys present in Object and convert all key into string..==>
console.log(keys);

let values = Object.values(person);//Makes an array of values present in Object but doesnt convert the data type..
console.log(values);

let loop1 = {
    0: 10,
    1:20,
}

let loop2 = [10,20];
for (let key in loop1) {//I didnt mention order here, no term of i so order doent matters.
    console.log(loop1[key],loop2[key])
}
  
console.log(loop1[1] === loop2[1]);

//Arrays are also Onjects with their index as keys and stored in the form of string but number