let slotsA = [[10, 50], [60, 120], [140, 210]]
let slotsB = [[0, 15], [60, 70]]
let dur = 11;
let arr = [];
let isFound = false
for (var i = 0; i < slotsA.length && i < slotsB.length; i++) {
    if (slotsA[i][0] === slotsB[i][0]) {
        let num1 = slotsA[i][0] + dur;
        let num2 = slotsB[i][0] + dur;
        if (num1 <= slotsA[i][1] && num2 <= slotsB[i][1]) {
            arr.push(slotsA[i][0])
            isFound = true;
            arr.push(num1)
            console.log(arr)
        }
    }
}
if (!isFound) {
    console.log(arr);
 }