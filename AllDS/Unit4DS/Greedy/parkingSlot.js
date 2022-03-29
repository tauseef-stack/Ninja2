var input = `2
4 3 6 7 11
9 4 10 9 14`;
let newInput = input.split(/[\r\n]+/);
let k = Number(newInput[0]);
//console.log(k)
let arrival = newInput[1].split(" ").map(Number);
let departure = newInput[2].split(" ").map(Number);
let arr = [];
for (let j = 0; j < arrival.length; j++) {
  let obj = {
    a: arrival[j],
    d: departure[j],
  };
  arr.push(obj);
}
arr.sort((a, b) => {
  return a.a - b.a;
});
console.log(arr);
let arr1 = [];
let arr2 = [];
for (let k = 0; k < arrival.length; k++) {
  arr1.push(arr[k].a);
  arr2.push(arr[k].d);
}
//console.log(arr1, arr2)
let i = 0;
let j = 0;
let overlap = 0;
let max = 0;
while (i < arrival.length && j < departure.length) {
  if (arr1[i] < arr2[j]) {
    overlap++;
    i++;
    max = Math.max(max, overlap);
  } else {
    overlap--;
    j++;
  }
  //  console.log(max);
}
if (max > k) {
  console.log("Not Possible");
} else {
  console.log("Possible");
}
