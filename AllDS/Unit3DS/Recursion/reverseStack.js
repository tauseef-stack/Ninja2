var arr = [1, 2, 3, 4, 5, 6];
var stack = [];
const rev = (arr) => {
    if (arr.length === 0) {
        return stack;
    }
    else {
        stack.push(arr[arr.length - 1]);
        arr.pop();
       return rev(arr);
    }
}

const result = rev(arr);
for (var i = 0; i < result.length; i++){
    console.log(result[i])
}