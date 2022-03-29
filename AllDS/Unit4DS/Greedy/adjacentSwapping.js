const input = `5 3
8 9 11 2 1`;
let newInput = input.split(/[\r\n]+/);
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = newInput[1].split(" ").map(Number);
let postion = 0;
for (var i = 0; i < n; i++){
    position = i;
    for (var j = 0; j < i + k+1; j++){
        if (arr[j] < arr[position]) {
            position = j;
        }
    }
    for (var a = position; a > i; a--){
        let temp = arr[a];
        arr[a] = arr[a - 1];
        arr[a - 1] = temp;
        k--;
    }
}

console.log(arr);

