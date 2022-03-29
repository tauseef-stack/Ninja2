//Time Complexity O(n**2);
//Space Complexity O(1);
//its arrange Desending Order From End.
var input = `8 6 5 3 2`;
var str = input.split(" ").map(Number);
var n = str.length;
var temp = 0;
for (var i = 0; i < n - 1; i++){
    for (var j = 0; j < n - 1 - i; j++){
        if (str[j] > str[j + 1]) {
            temp = str[j];
            str[j] = str[j + 1];
            str[j + 1] = temp;
        }
    }
}
console.log(str);
console.log(str.join(" "));