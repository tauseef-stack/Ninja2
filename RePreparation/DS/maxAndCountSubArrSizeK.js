let input = `3
8 7
3 4 7 2 -3 1 4 2
5 1
1 1 1 1 1
5 10
10 2 10 5 10`;
let I = input.split("\n");
let t = Number(I[0]);
for (var a = 0; a < t; a++) {
  let dim = I[2 * a + 1].split(" ").map(Number);
  let n = dim[0];
  let k = dim[1];
  let arr = I[2 * a + 2].split(" ").map(Number);
  console.log(countSubEqK(arr, n, k));
}
function countSubEqK(arr, n, k) {
  let sum = 0,
    count = 0,
    max = 0,
    obj = {};
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum < k) {
      obj[sum] = i;
    } else if (sum === k) {
      count++;
      max = Math.max(max, i + 1);
      obj[sum] = i;
    } else if (sum > k) {
      if (obj[sum - k] !== undefined) {
        count++;
        max = Math.max(max, i - obj[sum - k]);
      }
      obj[sum] = i;
    }
    console.log(obj, max, count);
  }
  return count;
}
