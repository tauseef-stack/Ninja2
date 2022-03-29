let input = `4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`
let newInput = input.split("\n");
let r = Number(newInput[0]);
let mat = newInput.slice(1, r + 1).map(item => item.split(" ").map(Number));
let left = 0;
let right = r - 1;
let top = 0;
let bottom = r - 1;
let a = 0;
let res = "";
for (var i = 0; i < Math.floor(r/2); i++){ //no of traversal needed
    for (let j = left+a; j <= right-a; j++)
    {
        res += mat[top+a][j] + " ";
    }
    for (let j = top + 1 + a; j <= bottom-a; j++){
        res += mat[j][right-a] + " ";
    }
    for (let j = right - 1-a; j >= 0+a; j--){
        res += mat[bottom-a][j] + " ";
    }
    for (let j = bottom - 1 -a; j >= 1+a; j--){
        res += mat[j][left+a] + " ";
    }
    a++;
    console.log(res)
}