var input = `4
6
1 7 6 4 8 4
7
1
2
3
6
5 3 8 2 1 9
5
6
1 2 2 4 5 6
10`;
var newInput = input.split(/[\r\n]+/);
var tc = Number(newInput[0]);
for (var a = 0; a < tc; a++) {
    var n = Number(newInput[3 * a + 1]);
    var str = newInput[3 * a + 2].split(" ").map(Number);
    str.sort(function (a, b) {
        return a - b;
    }); //Higher Order Sorting for Numbers.
    var k = Number(newInput[3 * a + 3]);
    var left = 0;
    var right = str.length-1;
    
    var   max = -1;
    while (left < right) {
        var sum = 0;
        sum += str[left] + str[right];
        if (sum < k) {
            max = Math.max(sum, max);
            left++;
        }
        else {
            right--;
        }
          
    }
      console.log(max)
}
