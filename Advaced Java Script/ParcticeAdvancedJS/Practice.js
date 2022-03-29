let a = 10;
 let b = a;  // also const have only block scope.{}.
b = 20 ;

var obj = Object.freeze({ masai: 'good' }); //it's secondary data type /non primitive which cabe be changed
var obj2 = obj;
obj2.masai = 'school'
console.log(b);
console.log(obj);

var arr = Object.freeze([1, 2, 3, 4, 5, 6]);
var arr2 = arr;
arr2[0] = 9;
console.log(arr)


function test(num) {
   num = Math.floor(Math.random() * num + 10);
    console.log(num);
}
test(5);

const arr3 = [1, 2, 3, 4, 5, 6, 7]; //since its Abstract data type even if is in const than also Can be Changed.
arr3[2] = 12;
console.log(arr3);

var name;
name = 'ronaldo'
name = 'neymar'
name = 'messi'
name[0]='k'  //can't change primitivw data type One elment
console.log(name)


x = 5; 
console.log(x);
var x;
 //Hoisting/attendence whole code's varaibles(not for let and const) and functions then Execution line by line.


y = 10;
console.log(y);
let y;