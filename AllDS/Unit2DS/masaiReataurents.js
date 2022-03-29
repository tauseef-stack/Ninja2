var input = `6
1
2 5
2 7
2 9
1
1`
var newInput = input.split(/[\r\n]+/);
let n = Number(newInput[0]);
let stack = [];
for (let i = 1; i <= n; i++){
    let arr = newInput[i].split(" ").map(Number);
    if (arr[0] === 1 && stack[0] === undefined) {
        console.log('No Food')
    }
    else if (arr[0] === 1 && stack[0] !== undefined) {
        console.log(stack[stack.length - 1]);
        stack.pop();
    }
    else if (arr[0] === 2) {
        stack.push(arr[1]);
    }
}