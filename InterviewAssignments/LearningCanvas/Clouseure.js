let arr = [8, 1, 3, 6, 4, 7, 2];
let n = arr.length;
function missing(arr, n) {
  let sum = 0;
  let num = n + 1;
  total = (num * (num + 1)) / 2;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}
// console.log(n);
console.log(missing(arr, n));
