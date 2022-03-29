//if elem not present print -1 ==>
let input = `10 6
4 6 7 9 10 -1 0 1 2 3`;
let newInput = input.split(/[\r\n]+/);
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];

let arr = newInput[1].split(" ").map(Number);


function KinRotSort(arr, n, k) {
    let l = 0;
    let h = n - 1;
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] === k) {
            return mid;
        }
        else if (arr[l] < arr[mid]) { //First Increasing Order From graph
            if (arr[l] <= k && k <= arr[mid]) {
                h = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else if (arr[l] >= arr[mid]) { //Second increasing order from graph 
            if (arr[mid] <= k && k <= arr[h]) {
                l = mid + 1;
            }
            else {
                h = mid - 1;
            }
       }
    }
    return -1;
}

console.log(KinRotSort(arr, n, k));
