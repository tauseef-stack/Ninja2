let input = `4 3
1 2 3 4`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1].split(" ").map(Number);
// console.log(arr,n,k)
function triplets(arr, n, k) {
  let i = 0;
  let j = 2;
  let count = 0;
  let num;
  while (i < j && j < n) {
    if (Math.abs(arr[j] - arr[i]) <= k) {
      j++;
    } else {
      num = j - i - 2;
      count += (num * (num + 1)) / 2;
      i++;
    }
  }
  j--;
  while (i < j - 1) {
    num = j - 1 - i;
    count += (num * (num + 1)) / 2;
    i++;
  }

  return count;
}
console.log(triplets(arr, n, k));
