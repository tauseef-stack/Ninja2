//Since we need to make all subset of size k so that we can sort the array and then use 2 pointer ==>
let input = `6 4
10 12 10 7 5 22`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return a - b;
  });
let min = 10 ** 9;
for (var i = 0; i <= n - k; i++) {
  let diff = arr[i + k - 1] - arr[i];
  min = Math.min(min, diff);
}
console.log(min);
