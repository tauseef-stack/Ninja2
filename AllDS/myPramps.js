let arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0];
let res = [];
let lcount = 0;
let fcount = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] === 0) {
        lcount++;
        res[arr.length-lcount] = arr[i];
    }
    else {
        res[fcount] = arr[i]
        fcount++
    }
    
}
console.log(res)