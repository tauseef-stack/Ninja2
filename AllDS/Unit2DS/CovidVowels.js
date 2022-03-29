var input = `dangerouscovid`;
var str  = input.split("");
var n = str.length;
var count2 = 0;
var count1 = 0;
for(var i=0 ; i<n ; i++){
    var res = "";
  for(var j=i ; j<n ; j++){
      res+=str[j];
     var obj = {};
      for (k = 0; k < res.length; k++) {
          if (obj[res[k]] === undefined) {
              obj[res[k]] = 1;
          }
          else {
              obj[res[k]] += 1;
          }
      }
      var key = Object.keys(obj);
      let count1 = 0;
      for(var l=0 ; l<key.length ; l++){
         if(key[l]=="a" || key[l]=="i" || key[l]=="o" || key[l]=="u"){
           count1++;
         }
      }
      if(count1==4){
        count2++;
       console.log(key);
       }
   
    }
  }

  console.log(count2)