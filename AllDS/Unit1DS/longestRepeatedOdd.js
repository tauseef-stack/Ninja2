var input = `18
1 2 2 3 3 3 4 4 4 4 5 5 5 5 5 7 9 0`
var newInput = input.split(/[\r\n]+/);
var n = Number(newInput[0]);
var str = newInput[1].split(" ").map(Number);
var temp = str[0];
var count1 = 0;
var count2 = 0;
  for(var i=0 ; i<str.length ; i++){
      if(str[i]%2!=0 && temp==str[i]){
          count1 += 1;
          console.log(count1)
      }
  
     else {
            if(count1>count2){
            count2=count1;
            }
              count1=0;
          temp = str[i+1] // try to remind this line.
         
       }
   
}
if (count1 > count2) {
      count2=count1
  }
console.log(count2)