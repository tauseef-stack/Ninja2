let input = `5
5 4 1 3 2`
let I = input.split("\n");
let n = Number(I[0]);
let arr = I[1].split(" ").map(Number);
let arr1 = [];
for (var i = 1; i <= n; i++){
    let obj = {
        index: i,
        value:arr[i-1]
    };
    arr1.push(obj);

}

//console.log(arr1)

//left greater ==>

let res1 = [];

let stack = [];
for (var i = 0; i < n; i++){
    while (stack[stack.length - 1] !== undefined && stack[stack.length - 1].value <= arr1[i].value) {
        stack.pop();
    }
    if (stack[stack.length - 1] === undefined) {
        res1.push(-1);
        stack.push(arr1[i])
    }
    else if (stack[stack.length - 1].value > arr1[i].value) {
        res1.push(stack[stack.length - 1].index);
        stack.push(arr1[i])
    }
}

let res2 = [];
 stack = [];
for (var i = n-1; i >= 0; i--){
    while (stack[stack.length - 1] !== undefined && stack[stack.length - 1].value <= arr1[i].value) {
        stack.pop();
    }
    if (stack[stack.length - 1] === undefined) {
        res2.push(-1);
        stack.push(arr1[i])
    }
    else if (stack[stack.length - 1].value > arr1[i].value) {
        res2.push(stack[stack.length - 1].index);
        stack.push(arr1[i])
    }
};
res2 = res2.reverse();

let res=""

for (var i = 0; i < res1.length; i++){
    res += (res1[i] + res2[i]) + " ";
}
console.log(res);

