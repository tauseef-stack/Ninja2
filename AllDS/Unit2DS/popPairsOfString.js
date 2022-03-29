var input = `aaabccddd`;
var arr = input.split("");
let n = arr.length
let arr1 = [];
for (let i = 0; i < n-1; i++){
    if (arr[arr.length-1] === arr[arr.length-2]) {
        arr.pop();
        arr.pop();
    }
    else if (arr[arr.length-1] !== arr[arr.length-2]) {
        arr1.push(arr[arr.length - 1]);
        arr.pop();
        
    }    
}
if (arr1[0] == undefined) {
    console.log('Empty String')
}
else {
    arr1.reverse();

console.log(arr1.join(""))
}
