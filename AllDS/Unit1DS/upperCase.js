function runProgram(input){
    var newInput = input.split(/[\r\n]+/);
    var tc = newInput[0];
    for(var a=0 ; a<tc ; a++){
      var n = Number(newInput[2*a+1]);
      var str = newInput[2*a+2].split("");
        var obj = {};
      for(var i=0 ; i<n ; i++){
         if(obj[str[i]]!==undefined){
           obj[str[i]]+=1;
         }
        else{
          obj[str[i]]=1;
        }
      }
      var key = Object.keys(obj)
        var ispossible = true ;
        var count = 0;
        if(n%2==0){
          for(var j=0 ; j<key.length ; j++){
            if(obj[key[j]]%2!=0){
               ispossible = false ;  
               console.log("Not Possible!")
            }
          }
          if (ispossible){
         console.log("possible!")
        }
        }
       else if (n%2!=0){
       for(var k=0 ; k<key.length ; k++) {
         if(obj[key[k]]%2!=0){
           count+=1;
         }
       }
                if(count==1){
                  console.log("Possible!")
                }
                else if (count!=1){
                 console.log("Not Possible!")
                }
       }
      
   
    }
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });