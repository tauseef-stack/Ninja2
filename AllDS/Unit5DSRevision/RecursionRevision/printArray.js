let arr = [1, 2, 3, 4, 5];
let n = arr.length;
function pArr (arr, n) {
    if (n === 0) {
        return null;
    }
    pArr(arr, n - 1);
    console.log(arr[n - 1])
}
pArr(arr, n);