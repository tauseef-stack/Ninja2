//element must not repeat ==>
//similarly we can solve next greater ==>
let input = `39 27 11 4 24 32 33 1`;
let arr = input.split(" ").map(Number);
let res = [];
let stack = [];
let n = arr.length;

for (var i = 0; i < n; i++) {
  while (stack[0] !== undefined && stack[stack.length - 1].val > arr[i]) {
    if (stack[stack.length - 2] === undefined) {
      res[stack[stack.length - 1].ind] = arr[i];
    } else if (
      stack[stack.length - 1].ind - stack[stack.length - 2].ind <=
      i - stack[stack.length - 1].ind
    ) {
      res[stack[stack.length - 1].ind] = stack[stack.length - 2].val;
    } else {
      res[stack[stack.length - 1].ind] = arr[i];
    }

    stack.pop();
  }

  if (stack[0] === undefined) {
    stack.push({
      ind: i,
      val: arr[i],
    });
  } else if (stack[stack.length - 1].val < arr[i]) {
    stack.push({
      ind: i,
      val: arr[i],
    });
  }
}

//Once we have done with iterating all the elem but there are some elem remaing in the stack ==>
while (stack[0] !== undefined) {
  if (stack[stack.length - 2] !== undefined) {
    res[stack[stack.length - 1].ind] = stack[stack.length - 2].val;
  } else {
    res[stack[stack.length - 1].ind] = -1;
  }
  stack.pop();
}
console.log(res, stack);
