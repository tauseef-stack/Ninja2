let input = `5
4 3 6 7 8`;
let newInput = input.split("\n");
let n = Number(newInput[0]);
let arr = newInput[1].split(" ").map(Number);
let gotElement = false;
for(var i=1 ; i<n-1 ; i++){
   let leftFlag = true;
   let rightFlag = true;
  for(var j=0 ; j<i ; j++){
    if(arr[j]<=arr[i]){
      continue;
    }
    else{
      leftFlag = false;
      break;
    }
  }
  
  if(leftFlag){
      for(var k=i+1 ; k<n ; k++){
         if(arr[k]>=arr[i]){
           continue;
         }
        else{
          rightFlag = false;
        }
     }
  }
  
  if(leftFlag && rightFlag){
     console.log(arr[i]);
    gotElement = true;
     break;
  }
  
}

if(!gotElement){
  console.log(-1)
}