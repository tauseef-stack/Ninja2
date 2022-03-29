var mat = `
5 5 
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`
var mat = mat.split("\n");
var dim = mat[0].split(" ").map(Number);
var r = dim[0];
var c = dim[1];
var matrix = mat.slice(1).map(function(item) {
  return item.split(" ").map(Number);
});
var result = "";
for (var i=0 ; i<r ; i++) {
  if (i%2==0) {
    for (var j=c-1 ; j>=0 ; j--) {
      result+=matrix[i][j]+" ";
    }
  }
  else if (i%2!=0) {
    for (var j=0 ; j<c ; j++) {
      result+=matrix[i][j]+" ";
    }
  }
}
     console.log(result)