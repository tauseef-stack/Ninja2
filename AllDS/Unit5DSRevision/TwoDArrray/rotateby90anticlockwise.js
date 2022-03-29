let input = `4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`;

let newInput = input.split("\n");
let R = Number(newInput[0]);
let matrix = newInput.slice(1).map(item => item.split(" ").map(Number));
for (var i = R-1; i >=0 ; i--){
    let res = "";
    for (var j = 0; j < R; j++){
        res += matrix[j][i] + " ";
    }
    console.log(res)
}