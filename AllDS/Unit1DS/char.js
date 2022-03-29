var arr = ["1", "2", "3", "4", "5"];
var n = arr.length;
count = 0;
for (var i = 0; i < n; i++) {
  if (arr[i] == Number(arr[i])) {
    count += 1;
  }
}

if (count == n) {
  console.log("numbers");
}
if (count < n) {
  console.log("alphanumeric");
}
if (count == 0) {
  console.log("chars");
}
