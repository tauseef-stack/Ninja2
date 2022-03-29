let input = `6 3
2 3 3 3 6 9`;
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[1].split(" ").map(Number);

let value1 = -1;
let l = 0 ;
let h = n-1;
while(l<=h){
let mid = Math.floor(l+(h-l)/2);
if(arr[mid]===k){
   value1 = mid;
   h = mid-1;
}
else if(arr[mid]>k){
  h = mid-1
}
else{
  l = mid+1
}
}

let value2 = -1;
l = 0 ;
h = n-1;
while(l<=h){
let mid = Math.floor(l+(h-l)/2);
if(arr[mid]===k){
   value2 = mid;
   l = mid+1;
}
else if(arr[mid]>k){
  h = mid-1
}
else{
  l = mid+1
}
}

console.log(value2-value1+1)