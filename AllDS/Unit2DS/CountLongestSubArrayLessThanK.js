//Time Complexity O(n)
//Space Complexity O(1)
var input = `4 3
2 3 4 6`;
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var n = dim[0];
var k = dim[1];
var arr = newInput[1].split(" ").map(Number);
var count = 0;
var sum = 0;
left = -1;
right = -1;
    for (var i = 0; i < n; i++){
        sum += arr[i];
        if (arr[i] % k != 0) {
            if (left == -1) {
                left = i;
            }
            right = i;
        }
       
    }
    
    if (sum % k != 0) {
        console.log(1)
    }
    else if (left == -1) {
        console.log(0);
    }
    else {
        left += 1;
        right = n - right;
        var n = (n - Math.min(left, right));

        subArray();
    }

function subArray() {
    var sum2 = 0;

    for (var j = 0; j < n ; j++){
        sum2 += arr[j];
    }
    if (sum2 % k != 0) {
        count++
    }
  
    for (var m = 0; m < arr.length - n; m++){
        sum2 += arr[n + m] - arr[m];
        if (sum2 % k != 0) {
            count++;
        }
       
    }
    console.log(count);
     
}
