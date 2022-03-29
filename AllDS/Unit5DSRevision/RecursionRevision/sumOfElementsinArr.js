let arr = [1, 2, 3, 4, 5];
let n = arr.length;
function sum(arr, n) {
    if (n === 0) {
        return 0;
    }
    return sum(arr,n - 1) + arr[n - 1];
}

console.log(sum(arr,n))