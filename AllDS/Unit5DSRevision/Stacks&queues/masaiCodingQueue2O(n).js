let input = `5
E 1 1
E 2 1
E 1 2
D
D`; //Awesome in Big O(n);
let I = input.split("\n");
let n = Number(I[0]);
let q1 = [];
let q2 = [];
let q3 = [];
let q4 = [];
let mas = [];
for (var i = 1; i <= n; i++) {
  arr = I[i].split(" ");
  if (arr[0] === "E") {
    arr = arr.map(Number);
    if (arr[1] === 1) {
      if (mas[0] === 1 || mas[1] === 1 || mas[2] === 1 || mas[3] === 1) {
        q1.push(arr[2]);
      } else {
        mas.push(arr[1]);
        q1.push(arr[2]);
      }
    } else if (arr[1] === 2) {
      if (mas[0] === 2 || mas[1] === 2 || mas[2] === 2 || mas[3] === 2) {
        q2.push(arr[2]);
      } else {
        mas.push(arr[1]);
        q2.push(arr[2]);
      }
    } else if (arr[1] === 3) {
      if (mas[0] === 3 || mas[1] === 3 || mas[2] === 3 || mas[3] === 3) {
        q3.push(arr[2]);
      } else {
        mas.push(arr[1]);
        q3.push(arr[2]);
      }
    } else if (arr[1] === 4) {
      if (mas[0] === 4 || mas[1] === 4 || mas[2] === 4 || mas[3] === 4) {
        q4.push(arr[2]);
      } else {
        mas.push(arr[1]);
        q4.push(arr[2]);
      }
    }
  } //end of bigger if
  else if (arr[0] === "D") {
    if (mas[0] === 1) {
      console.log(`${mas[0]} ${q1[0]}`);
      q1.shift();
      if (q1[0] === undefined) {
        mas.shift();
      }
    } else if (mas[0] === 2) {
      console.log(`${mas[0]} ${q2[0]}`);
      q2.shift();
      if (q2[0] === undefined) {
        mas.shift();
      }
    } else if (mas[0] === 3) {
      console.log(`${mas[0]} ${q3[0]}`);
      q3.shift();
      if (q3[0] === undefined) {
        mas.shift();
      }
    } else if (mas[0] === 4) {
      console.log(`${mas[0]} ${q4[0]}`);
      q4.shift();
      if (q4[0] === undefined) {
        mas.shift();
      }
    }
  }
}
