//count of pairs equal to k i!=j; Arry is of Unique Element
// if Array is not of unique element we can't Count Using two pointer;
var str = '1 2 3 4 5 6';
var k = 8;
var arr = str.split(" ").map(Number);
var left = 0;
var right = arr.length - 1;
var count = 0;
console.log(left,right)
while (left < right) {
    var sum = 0;
    sum += arr[right] + arr[left];
    if (sum == k) {
        count++;
        right--
        left++
    }
    else if (sum > k) {
        right--;
    }
    else {
        left++;
    }
}
    console.log(count) 