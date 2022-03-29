var mat =
 `4 4
 1 2 3 4 
 5 6 7 6
 7 8 9 9 
 2 4 1 3`;
var mat = mat.split("\n");
var dim = mat[0].split(" ").map(Number);
var r = dim [0];
var c = dim [1];
var matrix = mat.slice(1).map(function(item) {
    return item.split(" ").map(Number);
});
sum1 = 0;
for (var i=0 ; i<r ; i++) {   //2 for loop for coloumn & row
    for (var j=0 ; j<c ; j++) {
        if(i==j) {
            sum1+=matrix[i][j];
        }
    }
}
sum2 = 0;
for (var i=0 ; i<r ; i++) {
    for (var j=0 ; j<c ;j++) {
        if (i+j==r-1) {
            sum2+=matrix[i][j];
        }
    }
}
console.log(sum1-sum2)


