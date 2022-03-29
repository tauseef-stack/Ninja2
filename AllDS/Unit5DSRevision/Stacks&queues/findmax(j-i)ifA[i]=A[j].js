//You need to find maximum possible value of( i - j )where A[i]=A[j].
let input = `5
2 1 2 1 1`;
let I = input.split("\n");
let n = Number(I[0]);
let arr = I[1].split(" ").map(Number);
let obj = {};

for (var i = 0; i < n; i++) {
  //Bring first Occurance of every element with its index ==>
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = i;
  }
}
console.log(obj);
let max = -1;
for (var i = 0; i < n; i++) {
  if (obj[arr[i]] !== undefined) {
    let diff = i - obj[arr[i]];
    max = Math.max(max, diff);
    console.log(max);
  }
}
console.log(max);
