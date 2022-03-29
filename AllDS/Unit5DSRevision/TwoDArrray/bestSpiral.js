var input = `4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`
let newInput = input.split(/[\r\n]+/);
let r = Number(newInput[0]);
let mat = newInput.slice(1,1+r).map(function(item) {
      return item.split(" ").map(Number);                    
      });
 // console.log(mat[2][2])    
let left = 0;
let right = r-1;
let top = 0;
let bottom = r-1;
let m = 0 ;
let res = "";
for(var i=0 ; i<Math.floor(r/2); i++){//For circular looping
    for(var a=left+m ; a<=right-m ; a++){
       res+=mat[left+m][a]+" ";
    }
    for(var b=top+1+m ; b<=bottom-m ; b++){
      res+=mat[b][right-m]+" ";
    }
   for(var c=right-1-m ; c>=0+m ; c--){
     res+=mat[bottom-m][c]+" ";
   }
  for(var d=bottom-1-m ; d>0+m ; d--){
    res+=mat[d][left+m]+" ";
   }
   m++;
}
console.log(res);