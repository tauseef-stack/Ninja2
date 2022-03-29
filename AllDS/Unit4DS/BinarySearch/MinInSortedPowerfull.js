//same logic for finding pivot(Max in rotated and sorted) Element But Use arr[h] in condn ==>
let input = `7
4 6 7 9 10 -2 2`;
let newInput = input.split(/[\r\n]+/);
let n = Number(newInput[0]);
let arr = newInput[1].split(" ").map(Number);
let l = 0;
let h = n - 1;
isFound = false;
while (l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
   // console.log(arr[mid])
    let next = (mid + 1) % n; //if we are at last then we will come to first
    let prev = (mid - 1 + n) % n; //if we are at first will come to last
    if (arr[prev] > arr[mid] && arr[next] > arr[mid]) {
        console.log(arr[mid])
        isFound = true;
        break;
    }
    else if (arr[mid] <= arr[h]) {
        h = mid - 1; 
    }
    else if (arr[mid]>arr[h]) {
        l = mid + 1;
    }

}

if (!isFound) {
    console.log(-1)
}