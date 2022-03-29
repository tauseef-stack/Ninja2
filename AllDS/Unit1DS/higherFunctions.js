var arr = [1,5,4,7,9,8,6,15];
/*var res = arr.map(function(item){
    return item+item*item;
});
console.log(res)
var res = arr.filter(function(item){
    if (item<=5) {
    return item;
    }
});
console.log(res)*/
var res = arr.sort(function(c,d){
    return d-c; //need not to define a $ b.
});              // it can be any varaible.
console.log(res)