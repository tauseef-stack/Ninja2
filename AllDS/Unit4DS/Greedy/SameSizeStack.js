let input = `1
3
6
4
3 1
1 2
1 2`
let newInput = input.split(/[\r\n]+/);
let t = Number(newInput[0]);
let start = 0;
for(a=0 ; a<t ; a++){
   let n = Number(newInput[start+1+a]);
   let x = Number(newInput[start+2+a]);
   let y = Number(newInput[start+3+a]);
   let stack1 = [];
   let stack2 = [];
   for(let i=start+4+a ; i<start+4+a+n ; i++){
      let dim = newInput[i].split(" ").map(Number);
      stack1.push(dim[0]);
      stack2.push(dim[1]);
   }
  stack1.sort((a,b)=> {
     return a-b;
  })
  stack2.sort((a,b)=> {
     return a-b;
  });
  let cost = 0;
  for(let i=0 ; i<stack1.length ; i++){
    if(stack1[i]<stack2[i]){
      cost+=(stack2[i]-stack1[i])*x;
    }
    else{
      cost+=(stack1[i]-stack2[i])*y;
    }
  }
  console.log(cost);
  start+=n+2;
}