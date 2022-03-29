let input = `4 3 1 2 5`;
let arr = input.split(" ").map(Number);
let res = [];
let n = arr.length;
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
