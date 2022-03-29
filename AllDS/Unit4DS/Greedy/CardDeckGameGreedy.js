let input = `3
1 3 10
2
3 4`;
let I = input.split("\n");
let n1 = Number(I[0]);
let c1 = I[1].trim().split(" ").map(Number)
let n2 = Number(I[2]);
let c2= I[3].trim().split(" ").map(Number).sort((a,b)=> {
   return b-a;
})
let max = c2[0]; //opponent has this maxm card ==>
    //console.log(max)

let res = 0;
 for(var i=0 ; i<n1 ; i++){
    if(c1[i]<=max){
       let diff = max-c1[i]+1;
       // console.log(diff)
        res+=diff;
    }
 }
  console.log(res)