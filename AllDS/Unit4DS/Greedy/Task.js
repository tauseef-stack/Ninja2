let input = `3
6 10
8 15
5 12`;
let newInput = input.split(/[\r\n]+/);
let n = Number(newInput[0]);
let arr = [];
for (var i = 1; i <= n; i++) {
  let dim = newInput[i].split(" ").map(Number);
  let obj = {
    dur: dim[0],
    dead: dim[1],
  };
  arr.push(obj);
}
arr = arr.sort(function (a, b) {
  return a.dur - b.dur;
});
console.table(arr);
let rew = 0;
let duration = 0;
for (var j = 0; j < n; j++) {
  duration += arr[j].dur;
  rew += arr[j].dead - duration;
}
console.log(rew);
