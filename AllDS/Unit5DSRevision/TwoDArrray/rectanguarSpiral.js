let input = `4 3
1 2 3
4 5 6
7 8 9
10 11 12`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let r = dim[0];
let c = dim[1];
let mat = I.slice(1).map((item) => item.split(" ").map(Number));
console.log(r, c, mat);
let top = 0;
let bottom = r-1;
let left = 0;
let right = c - 1;
let count = 0;
let total = r * c;
let res = "";
for (var i = 0; i <= Math.floor(r / 2); i++){
    for (var j = top+i; j <= bottom-i && count<total ; j++){
        res += mat[j][left + i] + " ";
        count++;
    }
    for (var j = left + 1+i; j <= right-i && count<total ; j++){
        res += mat[bottom - i][j] + " ";
        count++;
    }
    for (var j = bottom - 1-i; j >= top+i && count<total ; j--){
        res += mat[j][right - i] + " ";
        count++;
    }
    for (var j = right - 1-i; j > left+i && count<total ; j--){
        res += mat[top + i][j] + " ";
        count++;
    }
}
console.log(res)