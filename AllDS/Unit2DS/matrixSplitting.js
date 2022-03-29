var input = `4 3
1 2 3
4 5 6
7 8 9
10 11 12`
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var r = dim[0];
var c = dim[1];
var mat = newInput.slice(1, r + 1).map(function (item) {
    return item.split(" ").map(Number);  //Makes Array of Array Can BE Acceced As Matrix with Double Breackets.
})
console.log(mat[0][2]);
console.log(dim)