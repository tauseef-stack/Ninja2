let input = `a2b1c2`;//aabcc
let arr = input.split('');
let n = arr.length;
let res = "";
for (var i = 0; i < n; i+=2){
    res += arr[i];
    for (var j = 1; j < Number(arr[i+1]); j++){
        res += arr[i];
    }
}
console.log(res)