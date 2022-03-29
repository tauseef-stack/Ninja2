let input = `50 
3
60 120 100   
10 30 20`; //maximum capacity
//length of array
//price
//weight
let newInput = input.split(/[\r\n]+/);
let c = Number(newInput[0]);
let n = Number(newInput[1]);
let p = newInput[2].split(" ").map(Number);
let w = newInput[3].split(" ").map(Number);
let pw = []; //price per weight
for (let i = 0; i < n; i++) {
  let temp = p[i] / w[i];
  pw.push(temp);
}
console.log(pw);
let arr = [];
for (let i = 0; i < n; i++) {
  let obj = {
    w: w[i],
    p: p[i],
    pw: pw[i],
  };
  arr.push(obj);
}
console.table(arr);
arr.sort((a, b) => {
  return b.pw - a.pw;
});
console.log(arr);
let profit = 0;

for (var i = 0; c > arr[i].w && i < n; i++) {
  profit += arr[i].p;

  c -= arr[i].w;
  // console.log(c);
}
if (c > 0) {
  profit += arr[i].pw * c;
}

console.log(Math.round(profit));
