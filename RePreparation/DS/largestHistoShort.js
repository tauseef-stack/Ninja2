let input = `2 1 5 6 2 3`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let ls, rs;
let res = [];
let stack = [];

for (var i = 0; i < n; i++) {
  while (stack[0] !== undefined && stack[stack.length - 1].val >= arr[i]) {
    rs = i - 1;
    if (stack[stack.length - 2] !== undefined) {
      ls = stack[stack.length - 2].ind + 1;
    } else {
      ls = 0;
    }
    res[stack[stack.length - 1].ind] =
      stack[stack.length - 1].val * (rs - ls + 1);
    stack.pop();
  }
  if (stack[0] === undefined || stack[stack.length - 1].val < arr[i]) {
    stack.push({
      ind: i,
      val: arr[i],
    });
  }
}

rs = i - 1;
while (stack[0] !== undefined) {
  if (stack[stack.length - 2] !== undefined) {
    ls = stack[stack.length - 2].ind + 1;
  } else {
    ls = 0;
  }
  res[stack[stack.length - 1].ind] =
    stack[stack.length - 1].val * (rs - ls + 1);
  stack.pop();
}

console.log(res);
