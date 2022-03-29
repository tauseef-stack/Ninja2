var input = `5 5
safer
amjad
babol
aaron
songs`
let newInput = input.split("\n");
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let m = dim[1];
let matrix = newInput.slice(1, n + 1).map(item => item.split(""));


let count = 0;
for (var i = 0; i < n; i++){
    for (var j = 0; j < m; j++){//these 2 for loop will iterate through all the elelemnts present in the matrix

        if (j + 3 < m) { //this check for each element in row
            let res = ""
             res += matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3];
            if (res === "saba") {
                count++;
            }
        }

        if (i + 3 < n) { //this will check for each element in the column.
            let res = "";
             res += matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] + matrix[i+3][j];
            if (res === "saba") {
                count++;
            }
        }

        if (i - 3 >= 0 && j + 3 < m) { //this will check for each element in the right diagonal.
            let res = "";
             res+= matrix[i][j] + matrix[i - 1][j+1] + matrix[i - 2][ j + 2 ] + matrix[i-3][j+3];
            if (res === "saba") {
                count++;
            }
        }

        
        if (i + 3 < n && j + 3 < m) { //this will check for each element in the left diagonal.
            let res = "";
            res += matrix[i][j] + matrix[i + 1][j+1] + matrix[i + 2][j+2] + matrix[i + 3][j + 3];
            if (res === "saba") {
                count++;
            }
        }
    }
}

console.log(count)