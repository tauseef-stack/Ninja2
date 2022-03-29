let  input = `5 2
1 1 2 2 5`
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
  if(arr[mid]===k){
     value = mid;
     h = mid-1;
  }
  else if(arr[mid]>k){
    h = mid-1
  }
  else{
    l = mid+1
  }
}
console.log(value)