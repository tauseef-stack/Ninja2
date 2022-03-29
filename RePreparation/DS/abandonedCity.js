let input = `2
5 13
5 1 2 3 4 
2 7
2 6`;

let I = input.split("\n");
let t = Number(I[0]);

for (var a = 0; a < t; a++) {
  let dim = I[2 * a + 1].split(" ").map(Number);
  let n = dim[0];
  let k = dim[1];
  let arr = I[2 * a + 2].split(" ").map(Number);

  city(arr, n, k) === 1000000 ? console.log(-1) : console.log(city(arr, n, k));
}

function city(arr, n, k) {
  let i = 0;
  let j = 0;
  let sum = arr[j];
  let min = 1000000;
  while (i < n && j < n) {
    if (sum < k) {
      //j++;
      sum += arr[++j];
    } else if (sum >= k) {
      if (i === j) {
        // min = Math.min(min, j - i + 1);
        return 1;
      } else {
        min = Math.min(min, j - i + 1);
        sum -= arr[i++];
        // i++;
      }
    }
  }
  return min;
}
