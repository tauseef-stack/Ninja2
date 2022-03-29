//Awesome Concept Clearing Question On Stack And Queues ==>
//first we need to make left array of indicess+1 of next smaller element of all
//we need to make right array of indicess-1 of next smaller of all at right
//Area = (arrRI[i]-arrLI[j]+1)*arr[i] = width*height;
let input = `2 1 5 6 2 3 1`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let widthPerBar = 1;

//array of indicess of next smaller left if(stack is Empty Means no elenment lesser than this exist n left of it so index =0(left boundary)) ==>
let stackL = [];
let arrLI = [];
for (var i = 0; i < n; i++) {
  while (stackL[0] !== undefined && stackL[stackL.length - 1].val >= arr[i]) {
    stackL.pop();
  }
  if (stackL[0] === undefined) {
    stackL.push({
      ind: i,
      val: arr[i],
    });
    arrLI.push(0);
  } else if (stackL[stackL.length - 1].val < arr[i]) {
    arrLI.push(stackL[stackL.length - 1].ind + 1);
    stackL.push({
      ind: i,
      val: arr[i],
    });
  }
}

console.log(arrLI);

//array of indicess of next smaller right (if stack is Empty means no element smaller than this right of it so index=== arr.length-1(last index) ==>
let stackR = [];
let arrRI = [];
for (var i = n - 1; i >= 0; i--) {
  while (stackR[0] !== undefined && stackR[stackR.length - 1].val >= arr[i]) {
    stackR.pop();
  }
  if (stackR[0] === undefined) {
    stackR.push({
      ind: i,
      val: arr[i],
    });
    arrRI.push(arr.length - 1);
  } else if (stackR[stackR.length - 1].val < arr[i]) {
    arrRI.push(stackR[stackR.length - 1].ind - 1);
    stackR.push({
      ind: i,
      val: arr[i],
    });
  }
}
arrRI = arrRI.reverse();
console.log(arrRI);

//Calculating Maximum area iterating over all The heights ==>
let max = 0;
for (var i = 0; i < n; i++) {
  let area = (arrRI[i] - arrLI[i] + 1) * arr[i] * widthPerBar;
  max = Math.max(max, area);
}
console.log(max);
