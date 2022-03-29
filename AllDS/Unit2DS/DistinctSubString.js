var input = `4 2
abcc`
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var n = dim[0];
var k = dim[1];
var str = newInput[1].split("");
var count2= 0 ;
   for(var i=0 ; i<n-1 ; i++){
     var res = "";
     for(var j=i ; j<k+i ; j++){
        res+=str[j];
      }
      
       res = res.split("");
       
     var obj = {};
     for(var m=0 ; m<res.length ; m++){
             if(obj[res[m]]===undefined){
             obj[res[m]]=1;
            }
           else{
            obj[res[m]]+=1;
           }
 }
    
    var key = Object.keys(obj);
        var count = 0;
       
     
        for(var l=0 ; l<key.length ; l++){
           if(obj[key[l]]==1){
             count+=1;
          }
     }
   
   if(count==res.length){
         count2++;
        }
   }
   
   console.log(count2)