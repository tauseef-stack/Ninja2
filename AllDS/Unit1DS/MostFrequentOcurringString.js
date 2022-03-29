var str = "11110002222";
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
var key = Object.keys(obj)  //string of keys
console.log(key)
var temp = key[0];
for(var j=1 ; j<key.length ; j++) {
    if(obj[key[j]]>obj[temp]){
      temp=key[j]
        
    }
}
console.log(temp)