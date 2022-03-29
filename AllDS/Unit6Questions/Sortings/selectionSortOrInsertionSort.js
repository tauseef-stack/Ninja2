let input = `5 1 4 3 2`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let min;
for (var i = 0; i < n - 1; i++){
    min = i;
    for (var j = i + 1; j < n; j++){
        if (arr[j] < arr[min]) {
            min=j
        }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
};
console.log(arr);

//Revrse Sorting ==> 
let max;
for (var i = 0; i < n - 1; i++){
    max = i;
    for (var j = i + 1; j < n; j++){
        if (arr[j] > arr[max]) {
            max=j
        }
    }
    let temp = arr[i];
    arr[i] = arr[max];
    arr[max] = temp;
};
console.log(arr)