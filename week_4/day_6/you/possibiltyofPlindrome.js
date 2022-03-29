var  str = "aabbcc";
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
var key = Object.keys(obj)
console.log(key)
var count= 0;
 for(var j=0 ; j<key.length ; j++){
     if(obj[key[j]]%2!=0){
         count+=1;
     }
 }
 if(count<=1){
     console.log("Possible!")
 }
 else if(count>1){
     console.log("Not Possible!")
 }