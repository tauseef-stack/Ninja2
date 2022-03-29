var input = `3
6
1 7 6 4 8 4
7
1
2
3
6
5 3 8 2 1 9
5`;
var newInput = input.split(/[\r\n]+/);
var tc = Number(newInput[0]);
for(var a=0 ; a<tc ; a++){
  var n = Number(newInput[3*a+1]);
  var str = newInput[3*a+2].split(" ").map(Number);
  var k = Number(newInput[3*a+3]);
    var count = 0;
    temp = 0;
  for(var i=0 ; i<n-1 ; i++){
    var sum = 0;
    for(var j=i+1 ; j<n ; j++){
       sum+=str[i]+str[j];
        if(sum<k && temp<sum){
            temp = sum;
      
         sum= 0;
        }
       sum=0;
    }
  }
    if(temp==0){
      console.log(-1)
    }
  else{
    console.log(temp)
  }
}