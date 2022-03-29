var input="0 2 6 9 9 0 5 5"
var str = input.split(" ")
var obj={};
for(var i=0 ; i<str.length ; i++){
    if(obj[(str[i])]!=undefined) {
        obj[str[i]]+=1;
    
}
else{
    obj[str[i]]=1;
}
}
console.log(obj)
console.log(Object.values(obj))  //string of object values
 var key = Object.keys(obj) //String of Object keys using object property
 console.log(key)
 for(var j=0 ; j<key.length ; j++) {
    if(obj[key[j]]==2){
       console.log(key[j])
    }
 }