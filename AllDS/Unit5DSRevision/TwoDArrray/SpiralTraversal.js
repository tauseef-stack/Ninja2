var input = 
`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`
var newInput = input.split(/[\r\n]+/);
     var tc = Number(newInput[0]);
  var start = 0 ;
       while(tc>0) {
       var dim = newInput[start+1].split(" ").map(Number);
         var r = dim[0];
         var c = dim[1];
         var mat = newInput.slice(start+2,start+2+r).map(function(item) {
           return item.split(" ").map(Number);
         });
         var a = 0;
         var res = "";
         var count = 0 ;
             for(var m=0 ; m<Math.floor(r/2) || m<Math.floor(c/2) ; m++){
         for(var i=0+a ; i<r-a && count<r*c ; i++){
           res+=mat[i][0+a]+" "; 
           count++
         }
         for(var j=1+a ; j<c-a && count<r*c ; j++){
           res+=mat[r-1-a][j]+" ";
           count++
         }
          for(var k=r-2-a ;k>=0+a && count<r*c ; k--){
           res+=mat[k][c-1-a]+" ";
            count++
         }
          for(var l=c-2-a ;l>=1+a && count<r*c ; l--){
           res+=mat[0+a][l]+" ";
            count++
         }
         a++;
               }
         console.log(res)
         
                  start+=r+1;
           tc--;
         
       }