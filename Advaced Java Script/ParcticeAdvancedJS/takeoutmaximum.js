var input = `10 3
-1 -1 -2 1 -2 4 1 9 3 9`
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var n = dim[0];
var k = dim[1];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var str = newInput[1].split(" ").map(Number);
var count = 0;
for (var i = 0; i < k ; i++) {
    sum1 += str[i];

}

for (var j = 0; j < str.length; j++) {
  
    sum1 += str[k + j] - str[j];

    if (sum1 > sum2)  {
        sum2 = sum1;
        
    }
    
}
       
  
    console.log(sum2)
