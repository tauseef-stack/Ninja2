let input = `3 3
1 2 3
4 5 6
7 8 9
5`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let R = dim[0];
let C = dim[1];
let matrix = I.slice(1, R + 1).map((elem) => elem.split(" ").map(Number));
let K = Number(I[R + 1]);
//console.log(R, C, matrix, K);

let rp;
let cp;
function findingPosition(R, C, matrix, K) {
  for (var i = 0; i < R; i++) {
    for (var j = 0; j < C; j++) {
      if (matrix[i][j] === K) {
        rp = i;
        cp = j;
        return;
      }
    }
  }
}
findingPosition(R, C, matrix, K);
var i = rp;
var j = cp;
let res = [];
res.push(matrix[i][j]);
while (i > 0 && j > 0) {
  i--;
  j--;

  res.unshift(matrix[i][j]);
}
var i = rp;
var j = cp;
while (i < R - 1 && j < C - 1) {
  i++;
  j++;
  res.push(matrix[i][j]);
}
console.log(res.join(" "));
res = [];
var i = rp;
var j = cp;
res.push(matrix[i][j]);
while (i > 0 && j < C - 1) {
  i--;
  j++;
  res.unshift(matrix[i][j]);
}
var i = rp;
var j = cp;
while (i < R - 1 && j > 0) {
  i++;
  j--;
  res.push(matrix[i][j]);
}
console.log(res.join(" "));
