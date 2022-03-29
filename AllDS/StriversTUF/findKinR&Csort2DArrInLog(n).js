let input = `3 4 30
1 3 5 7
10 11 16 20
23 30 34 50`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let r = dim[0];
let c = dim[1];
let k = dim[2];
let mat = I.splice(1).map(item => item.split(" ").map(Number));

//space=O(1) & time=O(n);
function _2DSort(mat, r, c, k) {
    let i = 0;
    let j = c - 1;
    while (i < r && j >= 0) {
        if (mat[i][j] === k) {
            return "Yes";
        }
        else if (mat[i][j] > k) {
            j--;
        }
        else {
            i++;
        }
    }
    return "No";
}

console.log(_2DSort(mat, r, c, k));


//time=log(n) & space=O(1); ==> i = mid/col; j = mid%col ==>
function bin2DArr(mat, r, c, k) {
    let l = 0;
    let h = r * c - 1;
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);
        let i = Math.floor(mid / c);
        let j = mid % c;
        if (mat[i][j] === k) {
            return "Yes"
        }
        else if (mat[i][j] > k) {
            h = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return "No"

}

console.log(bin2DArr(mat, r, c, k));

//Conversion 2D array into 1D Array ==> then do binary search ==> time=log(n) & space=O(n)
let newArr = [];
console.log(mat.length)
for (var i = 0; i < mat.length; i++){
 newArr = newArr.concat(mat[i])
}
console.log(newArr)