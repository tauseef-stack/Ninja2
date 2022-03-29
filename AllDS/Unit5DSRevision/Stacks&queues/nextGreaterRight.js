let input = `4 3 1 2 5`;
let arr = input.split(" ").map(Number);
let n = arr.length;
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
    res1[i] = -1;
    stack1.push(arr[i]);
  } else if (stack1[stack1.length - 1] > arr[i]) {
    res1[i] = stack1[stack1.length - 1];
    stack1.push(arr[i]);
  }
}
// res1 = res1.reverse();
console.log(res1);
