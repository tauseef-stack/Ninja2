let input = `7 1 6 4 5 8 3`;
let arr = input.split(" ").map(Number);
console.log(arr)
let n = arr.length;
let min = arr[0];
let profit = 0;
let maxProfit = 0;
for (var i = 0; i < n; i++){
   
    if (arr[i] < min) {
        min = arr[i];
       // console.log(arr[i])
    }
    else {
         profit = arr[i] - min;
        maxProfit = Math.max(maxProfit, profit);
    }
}
console.log(maxProfit)

