let input = `3
1 2 3`
let newInput = input.split("\n");
let n = Number(newInput[0]);
let arr = newInput[1].split(" ").map(Number);
let count = 0;
for (var i = 0; i < n; i++){
    let res = "";
    for (var j = i; j < n; j++){
        res += arr[j];
        let arr1 = res.split("").map(Number);
        let sum = 0;
        for (var k = 0; k < arr1.length; k++){
            sum += arr1[k];
        }
        if (sum % 2 !== 0) {
            console.log(sum);
            count++;
        }   
    }
}

console.log(count);
console.log(-2%2===0)