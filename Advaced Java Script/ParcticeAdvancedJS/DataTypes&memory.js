var a = 10; // primitive data types ocupies permanent space in the memory
var b = a;  // primitive 1)string 2)Number 3)boolean.
var b = 20; //it doesent effected Due to re assignment;
console.log(a, b)  // a=10 & b=20;

var c = 25;
var obj = { name: "Masai" };  //Abstract data types are not Store Data into memory 
                               // They only points Location of Data.
obj.name = "School"         // Abstract data types are 1)Array 2)object 3)Function. 
console.log(obj)
