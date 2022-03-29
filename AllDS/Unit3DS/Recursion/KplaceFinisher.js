var input = `8 5
10 9 8 7 7 7 5 5`;
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var n = dim[0];
var k = dim[1];
var arr = newInput[1].split(" ").map(Number);
var temp = arr[k-1];
var count = 0;
for (var j = 0; j < n; j++){
    if (arr[j] >= temp) {
        count++;
    }
}

console.log(count);