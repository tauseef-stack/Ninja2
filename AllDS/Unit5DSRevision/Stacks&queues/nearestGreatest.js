let input = `1
5
5 4 1 3 2`;
let I = input.split("\n");
let t = Number(I[0]);
for (var a = 0; a < t; a++) {
  let n = Number(I[2 * a + 1]);
  let arr = I[2 * a + 2].split(" ").map(Number);

  //left
  let res = [];

  let stack = [];
  for (var i = 0; i < n; i++) {
    while (
      stack[stack.length - 1] !== undefined &&
      stack[stack.length - 1] <= arr[i]
    ) {
      stack.pop();
    }
    if (stack[stack.length - 1] === undefined) {
      res.push(-1);
      stack.push(arr[i]);
    } else if (stack[stack.length - 1] > arr[i]) {
      res.push(stack[stack.length - 1]);
      stack.push(arr[i]);
    }
  }

  console.log(res);

  //right ==>
  let res1 = [];
  let stack1 = [];
  for (var i = n - 1; i >= 0; i--) {
    while (
      stack1[stack1.length - 1] !== undefined &&
      stack1[stack1.length - 1] <= arr[i]
    ) {
      stack1.pop();
    }
    if (stack1[stack1.length - 1] === undefined) {
      res1.push(-1);
      stack1.push(arr[i]);
    } else if (stack1[stack1.length - 1] > arr[i]) {
      res1.push(stack1[stack1.length - 1]);
      stack1.push(arr[i]);
    }
  }
  //res1 = res1.reverse();
  console.log(res1);

  //comp==>
  let fres = [-1];
  for (var i = 0; i < arr.length; i++) {
    if (res[i] > arr[i]) {
      fres.push(res[i]);
    } else if (res1[i] > arr[i]) {
      fres.push(res[i]);
    } else {
      res.push(-1);
    }
  }

  console.log(fres.join(" "));
}
