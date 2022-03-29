var input = `8
39 27 11 4 24 32 32 1`
var newInput = input.split(/[\r\n]+/);
let n  = Number(newInput[0]);
let arr = newInput[1].split(" ").map(Number);
let arr1 = []; //As a stack;
for (let i = n - 1; i >= 1; i--){
    let ispresent = false;
    for (let j = i - 1; j >= 0; j--){
        if (arr[i] > arr[j]) {
            arr1.push(arr[j])
            ispresent = true;
            break;
        } 
    }
    if (!ispresent) {
          arr1.push(-1)
      }
}
arr1.reverse();
console.log(arr1.join(" "))

