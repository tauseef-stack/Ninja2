var input = `5
1 2 3 4 1
5 6 7 8 1
9 10 11 12 1
13 14 15 16 1
1 1 1 1 1`
var newInput = input.split(/[\r\n]+/);
var r = Number(newInput[0]);
var mat = newInput.slice(1, 1 + r).map((item) => {
    return item.split(" ").map(Number);
});
console.log(mat[r-2][0])
var res = "";
var m = 0;
var left = 0;
var right = r - 1;
var top = 0;
var bottom = r - 1;
for (let i = 0; i < Math.floor(r/2); i++){
   
    for (var a = top+m;a<=bottom-m ;a++){
        res += mat[a][right-m] + " ";
    }

    for (var b = right - 1-m; b >= left+m;b--){
        res += mat[bottom-m][b]+" ";
    }
    for (var c = bottom - 1-m; c >= top+m; c--){
        res += mat[c][left+m] + " ";
    }
    for (var d = left + 1+m; d <= right - 1-m;d++){
        res += mat[top+m][d] + " ";
    }
     m++;
}
console.log(res)