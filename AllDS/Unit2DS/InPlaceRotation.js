var input = `1 2 3 4 5 6`;
var str = input.split(" ").map(Number);
var left = 0;
var right = str.length - 1;
var k = 1000;
 k = k % str.length;

function rotation(str, left, right) {
    
    while (left < right) {   //swapping == Two pointer technique.
        temp = str[left];    //
        str[left] = str[right];
        str[right] = temp;
        
        left++;
        right--;
    }
    
    return str;
}
console.log(rotation(str, left, right));
console.log(rotation(str, left, k-1));
console.log(rotation(str, k, str.length - 1))
console.log(str);
console.log(str.join(" "));//
