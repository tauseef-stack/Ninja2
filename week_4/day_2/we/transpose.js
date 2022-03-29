var mat = 
`4 3 
1 2 3
4 5 6 
7 8 9
1 2 3`;
var mat = mat.split("\n");
var dim = mat[0].split(" ").map(Number);
var r = dim[0];
var c = dim[1];
var matrix = mat.splice(1).map(function(item) {
    return item.split(" ").map(Number);
});
for (var i=0 ; i<c ; i++) {
    result= "";
    for (var j=0 ; j<r ; j++) {
        result+=matrix[j][i]+" ";
    }
    console.log(result)

}