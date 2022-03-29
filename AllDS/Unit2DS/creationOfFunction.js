var input = `2 0 5 7 8 11`;
let str = input.split(' ').map(Number);
str.sort(function (a, b) { //Higher order functin is required for sorting Number.
    return a - b;
});
console.log(str);
function max(str, n) {  //Try to be dynamic While forming Function.
                        //Do not use Hard Coded values.
    var temp = str[0];
    for (var i = 0; i < n; i++){
        if (str[i] > temp) {
            temp = str[i];
        }
    }
    return temp; //This will print When we call a function into console.log.
                //This kills a function with keeping return value in it.
                //Instead of return value all the thinks into function get destroyed.Once it Exectes.
                //It Throughs a value which we need to catch either into console or in variable.
   
}
//max(str, str.length);
console.log(max(str, str.length))
console.log(max([1, 2, 3, 4, 5, 6], 6));
console.log(max([22,55,66,88,99,105], 6))

