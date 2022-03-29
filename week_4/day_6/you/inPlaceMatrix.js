var n = 4 ;
var mat = 
[[1, 2, 3 ,4],
[5, 6, 7 ,8],
[1, 2, 3, 4],
[5, 6 ,7 ,8],]

for (var i=0 ; i<Math.floor(n/2) ; i++) {
    var result = "";
    for (var j=0 ; j<n-1-i ; j++) {
       var temp = mat[i][j] ;
       mat[i][j] = mat[j][n-i-1]
       result+=mat[i][j]+" ";
       mat[j][n-1-i] = mat[n-1-i][n-1-j]
       result+=mat[j][n-1-i]+" ";
       mat[n-1-i][n-1-j] = mat[n-1-j][i]
       result+=mat[n-1-i][n-1-j]+" ";
       mat[n-1-j][i] = temp
       result+=mat[n-1-j][i]+" ";
       
    }
        console.log(result)
}
   