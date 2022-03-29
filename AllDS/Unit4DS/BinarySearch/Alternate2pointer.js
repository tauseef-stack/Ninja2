let input = `5 2
3 4 0 2 7`;
let newInput = input.split(/[\r\n]+/);
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = newInput[1].split(" ").map(Number);
arr = arr.sort((a, b) => a - b);
for (i = 0; i < n; i++){
    let a = arr[i];
    let b = k - a;
    let l = i + 1;
    let h = n - 1;
    var isFound = false;
    console.log(b)

    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);
       // console.log(mid)
        if (arr[mid] === b) {
            isFound = true;
            console.log(1);
            break;

        }
      else if (arr[mid] < b) {
            l = mid + 1;
        }
        else {
            h = mid - 1;
        }
    }
    if (isFound) {
        break;
    }
}

if (!isFound) {
    console.log(-1);
}