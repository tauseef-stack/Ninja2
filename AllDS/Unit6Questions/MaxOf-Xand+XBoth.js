//during iteration we are checking each number's reverse if it is there in object than update answer oterwise insert itnto object.
let input = `2 1 -1 2 3`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let ans = -1;
let obj = {};
let isFound = false;
for (var i = 0; i < n; i++){
    if (obj[-arr[i]] !== undefined) {
        if (ans < Math.abs(arr[i])) {
            ans = Math.abs(arr[i]);
            isFound = true;
        }
    }
    else {
        obj[arr[i]] = 1;
    }
}
if (isFound) {
  console.log(ans)  
}
else {
  console.log(ans)  
}