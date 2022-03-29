//TC=O(n**2) SC=O(1);
//test Case === //`5 1 4 3 2`
let input = `-7 2 -3 -12 -8 48 3 0` ;
let arr = input.split(" ").map(Number);
let n = arr.length;
for (var i = 0; i < n -1; i++){
    for (var j = 0; j < n - i-1; j++){
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr)

//this can be workd reverse when we just change a single sign ==>

for (var i = 0; i < n -1; i++){
    for (var j = 0; j < n - i-1; j++){
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr)