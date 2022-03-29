let input = `5
0 2 0 6 9`;
let newInput = input.split(/[\r\n]+/);
let n = Number(newInput[0]);
let arr = newInput[1].split(" ").map(Number);
let obj = {};
 for(var i=0 ; i<n ; i++){
   if(obj[arr[i]]===undefined){
      obj[arr[i]]=1;
   }
   else{
     obj[arr[i]]+=1
   }
 }
//   console.log(obj)
   let key = Object.keys(obj);
let temp1 = 0;
let temp2 = 0;
  for(var j=0 ; j<key.length ; j++){
    if(obj[key[j]]>temp1){
        temp1 = obj[key[j]];
        temp2 = key[j];
    }
  }
  console.log(temp2)