var newInput = input.split(/[\r\n]+/);
  var n = Number(newInput[0]);
  var arr = newInput[1].split(" ").map(Number);
  var t = Number(newInput[2]);
       for (var a=1 ; a<=t ; a++) {
         var b = Number(newInput[a+2]);
        
         var result = "";
  for (var i=0 ; i<n ; i++) {
      if (arr[i]>b) {
         result=result+arr[i]+" ";
      }
  }
  var arr1=result.split(" ").map(Number);
         arr1.pop();
  var temp = arr1[0];
    for (var j=0 ; j<arr1.length ; j++) {
      if(arr1[j+1]<temp) {
        temp=arr1[j+1];
          }
      }
       
   if (temp==undefined) {
     console.log(-1)
     }
  else {
        console.log(temp)
    }
       }
