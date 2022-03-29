var arr = "aga222dd";
var count = 0;
for (var i = 0; i < 8; i++) {
  if (arr[i] == Number(arr[i])) {
    count += 1;
  }
}
console.log(count);
