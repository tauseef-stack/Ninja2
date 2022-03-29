//limitation ==> should not have duplicates elements Consecutively==> remeber ===>otherwise it will give correct answer for maxm area but cal culate wrong area secondly appearing duplicate element . ok==>
let input = `2 1 5 6 2 3`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let res = [];
let stack = [];
for (var i = 0; i < n; i++) {
  if (stack[0] === undefined || stack[stack.length - 1].val <= arr[i]) {
    stack.push({
      ind: i,
      val: arr[i],
    });
  } else {
    while (stack[0] !== undefined && stack[stack.length - 1].val > arr[i]) {
      let rs = i - 1;
      let ls;
      if (stack[stack.length - 2] === undefined) {
        ls = 0;
      } else {
        ls = stack[stack.length - 2].ind + 1;
      }
      res[stack[stack.length - 1].ind] =
        stack[stack.length - 1].val * (rs - ls + 1);
      stack.pop();
    }
    stack.push({
      ind: i,
      val: arr[i],
    });
  }
}

rs = i - 1; //must be last index not full length ==>
while (stack[0] !== undefined) {
  if (stack[stack.length - 2] === undefined) {
    ls = 0;
  } else {
    ls = stack[stack.length - 2].ind + 1;
  }
  res[stack[stack.length - 1].ind] =
    stack[stack.length - 1].val * (rs - ls + 1);
  stack.pop();
}

console.log(stack, res);
