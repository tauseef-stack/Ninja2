let input = `10
2 20 12 10 8 7 5 4 3 1`;
let newInput = input.split(/[\r\n]+/);
let n = Number(newInput[0]);
let arr = newInput[1].split(" ").map(Number);
let l = 0;
let h = n - 1;
let temp;
while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (arr[mid] < arr[mid + 1]) {
        l = mid + 1;
    }
    else {
        temp = mid;
        h = mid - 1;
    }
}

console.log(arr[temp]);