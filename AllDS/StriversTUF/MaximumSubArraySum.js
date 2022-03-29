//One more Kadane's Algoritham ==>
//untill unless some is positive keep on adding array elements otherwise update sum to 0 while moving foward ==>
let input = `-2 -3 4 -1 -2 1 5 -3`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let sum = 0;
let max = arr[0];
for (var i = 0; i < n; i++) {
    sum += arr[i];
    if (sum < 0) {
        sum = 0
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    else {
        
        max = Math.max(sum, max)
    }
}
console.log(max)
