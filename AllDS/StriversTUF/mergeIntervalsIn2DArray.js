//awesome uderstanding of 2D Array ==>
let input = `1 3
2 6
8 10
8 9
9 11
15 18
2 4
16 17`;
let I = input.split("\n");
let arr = I.slice(0).map(item => item.split(" ").map(Number));
 arr = arr.sort((a, b) => {
    return a[0] - b[0];
 }) //sorting of 2D array is Same as Sorting Array of Objects ==>
let n = arr.length;
let newArr = [];
let subArr = arr[0];

console.log(arr,subArr)
for (var i = 1; i < n ; i++){
    if (subArr[1] >= arr[i][0]) {
        if (subArr[1] < arr[i][1]) {
            subArr[1]=(arr[i][1]);
        }
    }
    else {
        newArr.push(subArr);
        subArr = arr[i];
    }
}
newArr.push(subArr)
console.log(newArr)