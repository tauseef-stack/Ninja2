/* CONSTRUCTOR FUNCTION(Construct Object)==allows access to 'THIS' outside object.
"new"==Creates completely new Object into variable with function call in varaible also with that function name.
"call"== Calls function with obj var name and passing arguments to function as well.
"apply== Calls function with obj var name and passing arguments to function as well
          but it takes function arguments in the form of an continous array.that particular array can be declare outsude also"
"bind"==it just bind functin to obj var but doesn't executes to execute it we need to store it into variable,
         now it convets variable into funtion, to execute it we need to call var as function.
         it advantage is we can call it anywhere when ever we need it.
*/


function play(n, t) {   //this funtion work as a blue print of all below function call./constructor
    this.name = n;
    this.club = t;
}
var myteam = new play('messi', 'FCbarcalona')  // magic of key word creates new Object.
console.log(myteam); /* This time this is not pointing to global object its pointing
                      to variable my team bcoz of new keyword.
                      new === forms an obj={} with the same name as variable,return function value in it */
var person2 = new play('ronaldo', 'juventus');
console.log(person2)
var person3 = new play('girezman', 'france');
console.log(person3)
var person4 = new play('mbappe', 'beyrenMunich');
console.log(person4)  

// ca1l,apply,bind.
 /* var person1 = {
    name: 'jhon',
    myName: function () {
        this.age = 24;
        console.log(person1.name);
        console.log(this.age);
    },
}
person1.myName();
console.log(person1);

var person2 = {
    name: 'rahul',
    myName: function () {
        this.age = 28;
        console.log(this.name);
        console.log(person2.age);
    },
}
person2.myName();
console.log(person2); */


//above code can be called using seprate function instead of method we will have to use call .
var person11 = {
    name: 'jhon',
}
var person12 = {
    name: 'rahul',
}
function myName(m,n) {
    console.log(this.name);
    this.age = m
    this.city = n
    console.log(this)
}
// myName.call(person11);
// myName.call(person12);
// myName.call(person11, 21);
// myName.call(person12, 28,'Bhiwandi');
// myName.call(person11, 21, 'pune');
/* .call AND .apply are same thing only we need to pass argument in .apply in the form of an array,
and in case of .call we directly invoke values seprated by comma, both the casess var obj call 
will be same 
apply===array[only one after var obj call]
cal===commas sepration*/
//myName.apply(person11, [21,'thane']);
/*.bind, Binds the Function to any object but Doesn't Executes 
It executes when we store it into variable and then executes that variable like function.*/
// myName.bind(person11, 21, 'pune'); //object becomes function using bind
// console.log(person11)
//  var myBind = myName.bind(person11, 21, 'pune');
//  console.log(myBind)
//  myBind(); // calling bind object variable as a function.

// see how normal function behaves?
function random(i) {
    return Math.random() * i;//when we use return all the values of function flashed off except return think.
                             //and for return value now function behaves like a variable keeping return value in it.
}
function create(j) {
    var val = random(5) + j;
    console.log(val);
}
create(20)