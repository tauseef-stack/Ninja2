var input = `4 4 16
1 2 1 8
2 2 8 6
8 1 2 5
2 5 8 6`
let newInput = input.split("\n");
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let m = dim[1];
let p = dim[2];

let count = 0;
let matrix = newInput.slice(1, n + 1).map(item => item.split(" ").map(Number));
for (var i = 0; i < n; i++){
    for (var j = 0; j < m; j++){//these 2 for loop will iterate through all the elelemnts present in the matrix

        if (j + 2 < m) { //this check for each element in row
            let sum = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2];
            if (sum === p) {
                count++;
            }
        }

        if (i + 2 < n) { //this will check for each element in the column.
            let sum = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j];
            if (sum === p) {
                count++;
            }
        }

        if (i - 2 >= 0 && j-2>=0) { //this will check for each element in the right diagonal.
            let sum = matrix[i][j] * matrix[i - 1][j-1] * matrix[i - 2][j-2];
            if (sum === p) {
                count++;
            }
        }

        
        if (i + 2 < n && j-2>=0) { //this will check for each element in the left diagonal.
            let sum = matrix[i][j] * matrix[i + 1][j-1] * matrix[i + 2][j-2];
            if (sum === p) {
                count++;
            }
        }
    }
}

console.log(count)