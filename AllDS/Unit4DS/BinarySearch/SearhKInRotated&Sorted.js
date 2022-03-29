let input = `8 6
7 8 1 2 3 4 5 6`;

let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1].split(" ").map(Number);

function kInRotSortArr(arr, n, k) {
    let l = 0;
    let h = n - 1;
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] === k) {
            return mid;
        }
        else if (arr[mid] > arr[l]) { //SI
            if (k <= arr[mid] && k >= arr[l]) {
                h = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else if (arr[mid] <= arr[l]) {//DSI
            if (k >= arr[mid] && k <= arr[h]) {
                l = mid + 1;
            }
            else {
                h = mid - 1;
            }
        }
    }
    return -1;
}
console.log("index of K:",kInRotSortArr(arr, n, k))