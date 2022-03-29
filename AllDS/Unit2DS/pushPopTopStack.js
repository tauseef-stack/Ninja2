var input = `6
1 15
1 20
2
3
2
3`
let arr1 = []; //Working as a stack .
var newInput = input.split(/[\r\n]+/);
var n = Number(newInput[0]);
for (let i = 1; i <= n; i++){
    let arr = newInput[i].split(" ").map(Number);
    
    if (arr[0] === 1) {
        arr1.push(arr[1])
       
    }
    else if (arr[0] === 2 && arr1[0]!==undefined) {
        arr1.pop();
    }
    else if (arr[0] === 3 && arr1[0] === undefined) {
        console.log('Empty!');
    }
    else if (arr[0] === 3 && arr1[0] !== undefined) {
        console.log(arr1[arr1.length-1])
    }
}
