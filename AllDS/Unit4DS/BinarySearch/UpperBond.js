let  input = `10 4
0 2 4 4 5 5 7 7 9 10`
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1].split(" ").map(Number);
let value = -1;
let l = 0 ;
let h = n-1;
while(l<=h){
  let mid = Math.floor(l+(h-l)/2);
  if(arr[mid]<=k){
     l = mid+1
  }
  
  else{
    h = mid-1
  }
}
console.log(l)