var n = 3;
for (i = -n; i <= n; i++) {
  result = "";
  for (j = -n; j <= n; j++) {
    if (j == -n || i == n) {
      result = result + "*";
    } else {
      result = result + " ";
    }
  }
  console.log(result);
}
