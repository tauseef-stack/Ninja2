var input = `4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE`

var newInput = input.split(/[\r\n]+/);
var res = "";
var n = Number(newInput[0]);
var count = 0;
var maxrowcount = 0;
var countstore = 0;
     for(var a=1 ; a<=n ; a++){
        var str = newInput[a].split("");
       for(var i=0 ; i<str.length ; i++){
         res+=str[i]
           if(str[i]=="C"){
              count+=1;
           }
           else{
             if(countstore<count){
                countstore=count;
                count=0;
              }
             count=0;
             }
           count=0
       }
           count=0;
          
         if(maxrowcount<countstore){
           maxrowcount=countstore;
           console.log(maxrowcount)

          }
          
     }
console.log(maxrowcount)


      

