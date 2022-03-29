var str = 'masai';
var arr = str.split('');


var i = Math.floor(Math.random() * str.length);

function test(chng) {
    chng[i] = 'changed'
    return chng;
}

var chng = test(str) //calling function into varaible with declaring parameter.
console.log(chng)

var obj = Object.freeze({ admin: 'tauseef' });
obj.admin = 'shariq'
console.log(obj);


var obj = {};

function creation() {
    obj.i= i * 10;
}
creation();
console.log(obj)
