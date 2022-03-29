let input = `11 3
aabcdabbcdc`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1].trim().split("");
console.log(longSubSizeEqK(arr, n, k))

function longSubSizeEqK(arr, n, k) {
    let count = 0;
    let distinct = 0;
    let i = 0;
    let j = 0;
    let obj = {};
    while (i < n && j < n) {
        if (!obj[arr[j]]) {
            obj[arr[j]] = 1
            
            distinct = j - i + 1;
            if (distinct >= k) {
                count++;
            }
            j++;
        }
        else {
            delete obj[arr[i]];
            i++;
        }
    }
    return count;
}
