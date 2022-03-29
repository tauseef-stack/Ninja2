let input = `7 9
10 12 2 4 6 7 9`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1].split(" ").map(Number);

function kInRotSort(arr, n, k) {
  let l = 0;
  let h = n - 1;
  while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (arr[l] <= arr[mid]) {
      //first incresing order
      if (arr[l] <= k && k <= arr[mid]) h = mid - 1;
      else l = mid + 1;
    } else if (arr[l] > arr[mid]) {
      //Second increasing order
      if (arr[mid] <= k && k <= arr[h]) l = mid + 1;
      else h = mid - 1;
    }
  }
}
console.log(kInRotSort(arr, n, k));
