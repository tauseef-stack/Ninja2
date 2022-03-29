var input = `([]`;
let arr = input.split("");
let stack = [];
let wrongSeq = false;

for(var i=0 ; i<arr.length ; i++){
  if(arr[i]==="(" || arr[i]==="[" || arr[i]==="{"){
      stack.push(arr[i])
      
  }
  else {
    if (arr[i] === ")" || arr[i] === "]" || arr[i] === "}") {
      if((arr[i]===')' && stack[stack.length-1]==="(") || (arr[i]==='}' && stack[stack.length-1]==="{") || (arr[i]===']' && stack[stack.length-1]==="[") ){
        stack.pop()
       // console.log(stack)
    }
   else{
     wrongSeq = true;
     break;
   }
     }
   
  }
}
 if(wrongSeq){
   console.log("not balanced")
 }
else if (stack[0]!==undefined){
   console.log("not balanced")
}
 else {
   console.log("balanced")
     
}