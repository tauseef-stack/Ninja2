var input = `4 2
abcc`
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number);
var n = dim[0];
var k = dim[1];
var str = newInput[1].split("");
var obj = {};
for(var m=0 ; m<str.length ; m++){
        if(obj[str[m]]===undefined){
        obj[str[m]]=1;
       }
      else{
       obj[str[m]]+=1;
      }
}
console.log(obj)