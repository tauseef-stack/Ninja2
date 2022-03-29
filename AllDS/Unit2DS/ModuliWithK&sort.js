var input = `5 6
12 18 17 65 46`
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var n = dim[0];
var k = dim[1];
console.log(k,n)
var arr = newInput[1].split(" ").map(Number);
var temp = 0;
for(var i=0 ; i<n-1 ; i++){
   for(var j=0 ; j<n-1-i ; j++){
       if ((arr[j] % k) > ((arr[j + 1]) % k)) {
           console.log((arr[j] % k),(arr[j + 1]) % k)
          temp = arr[j];
         arr[j]=arr[j+1];
         arr[j+1]=temp;
       }   
   }
}
    console.log(arr)