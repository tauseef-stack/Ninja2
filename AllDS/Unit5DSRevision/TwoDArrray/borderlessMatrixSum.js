var input = `4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16`;

let newInput = input.split(/[\r\n]+/);
let dim = newInput[0].split(" ").map(Number);
let r = dim[0];
let c = dim[1];
let mat = newInput.slice(1, r + 1).map((item) => {
  return item.split(" ").map(Number);
});
let count = 0;
for (var i = 1; i < r - 1; i++) {
  for (var j = 1; j < c - 1; j++) {
    // if(i!==0 && i!==r-1 && j!==0 && j!==c-1){

    // }
    count += mat[i][j];
  }
}
console.log(count);
