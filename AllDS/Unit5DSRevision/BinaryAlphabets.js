let input = `11
abcdefghijk`;
let newInput = input.split(/[\r\n]+/);
let n = Number(newInput[0]);
let arr = newInput[1].split("");
let mid = Math.floor((n-1) / 2);
let res = "";
res += arr[mid];
let l1 = 0;
let h1 = mid - 1;
let l2 = mid + 1;
let h2 = n - 1;
mid1 = Math.floor(l1 + (h1 - l1) / 2);
res += arr[mid1];
for (var i = 0; i <= h1; i++){
    if (arr[i] !== arr[mid1]) {
        res += arr[i];
    }
}
let mid2 = Math.floor(l2 + (h2 - l2) / 2);
res += arr[mid2];

for (var j = l2; j <= h2; j++){
    if (arr[j] !== arr[mid2]) {
        res += arr[j];
    }
   
}

console.log(res);