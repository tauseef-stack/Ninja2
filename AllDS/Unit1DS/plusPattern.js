var n = 3;
for (var i=-n ; i<=n ; i++) {
var result ="";
for (var j=-n ; j<=n ; j++) {
  if (i==0 || j==0) {
    result=result+"*";
  }
  else {
    result=result+" ";
  }
}
  console.log(result)
  }