let input = `6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`;
let I = input.split("\n");
let n = Number(I[0]);
let arr = I[1]
  .trim()
  .split(" ")
  .map((item) => item.replace(":", ""))
  .map(Number);
let dep = I[2]
  .trim()
  .split(" ")
  .map((item) => item.replace(":", ""))
  .map(Number);
//console.log(dep)
let i = 1;
let j = 0;
let platform = 1;
let max = 1;
while (i < n && j < n) {
  //  console.log(platform)
  if (arr[i] < dep[j]) {
    platform++;
    i++;
    max = Math.max(max, platform);
    console.log(platform);
  } else {
    platform--;
    j++;
  }
}
console.log(max);
