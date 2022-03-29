var str = "AAAABBAAABB"
var obj = {};
for(var i=0 ; i<str.length ; i++){
    if(obj[str[i]]!==undefined){
        obj[str[i]]+=1;
    }
    else{
        obj[str[i]]=1;
    }
}
console.log(obj)

  var key = Object.keys(obj) //string
  console.log(key[0])
