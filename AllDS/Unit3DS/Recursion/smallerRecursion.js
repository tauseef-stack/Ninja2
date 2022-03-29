var input = `6
-2 0 8 4 -3 15`
var newInput = input.split(/[\r\n]+/);
  var n = Number(newInput[0]);
  var arr = newInput[1].split(" ").map(Number);
  //console.log(arr)
  var temp = arr[0];
  function small(n,arr){
     if(n==0){
        return temp
     }
    else {
      
        if(temp>arr[n-1]){
            temp=arr[n-1];
           // console.log(temp)
        }
      //console.log(temp)
      return small(n-1,arr)
    }
   
}
console.log(small(n, arr));