var numbers = "231 312 23 43 41 343 14 1 20 15 20 10 6";
var arr = numbers.split(" ").map(Number);
var arr1 = arr.filter(function (item) {
    return item%2==0;
});
arr1.sort(function( a, b) {
    return a-b ;
});
console.log(arr1)