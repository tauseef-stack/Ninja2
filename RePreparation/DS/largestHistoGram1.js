let input = `2 1 5 6 2 3`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let LSI = [];
let RSI = [];
let stackL = [];
let stackR = [];
//Left smaller Index =>
for (let i = 0; i < n; i++) {
  while (stackL[0] !== undefined && stackL[stackL.length - 1].val >= arr[i]) {
    stackL.pop();
  }
  if (stackL[0] === undefined) {
    stackL.push({
      ind: i,
      val: arr[i],
    });
    LSI.push(0);
  } else if (stackL[stackL.length - 1].val < arr[i]) {
    LSI.push(stackL[stackL.length - 1].ind + 1);
    stackL.push({
      ind: i,
      val: arr[i],
    });
  }
}

//Right Index Array ==>
for (let i = n - 1; i >= 0; i--) {
  while (stackR[0] !== undefined && stackR[stackR.length - 1].val >= arr[i]) {
    stackR.pop();
  }
  if (stackR[0] === undefined) {
    stackR.push({
      ind: i,
      val: arr[i],
    });
    RSI[i] = arr.length;
  } else if (stackR[stackR.length - 1].val < arr[i]) {
    RSI[i] = stackR[stackR.length - 1].ind - 1;
    stackR.push({
      ind: i,
      val: arr[i],
    });
  }
}

let max = -1;
let area = -1;
for (let i = 0; i < n; i++) {
  area = (RSI[i] - LSI[i] + 1) * arr[i];
  max = Math.max(max, area);
}
console.log(RSI);
