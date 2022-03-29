let input = `2
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc
`
let I = input.split("\n");
let t = Number(I[0]);
let count = 0;

for(var a=1 ; a<=t ; a++){
    let n = Number(I[count+a])
    let obj = {};
 
    for(var i=0 ; i<n ; i++){
         let str = I[count+a+i+1].split("").sort().join("")

         if(obj[str]===undefined){
             obj[str]=1;
         }
         else{
             obj[str]+=1;
         }
    }
   // console.log(obj)
    let key = Object.keys(obj);
      let angCount = 0;
    for(var j=0 ; j<key.length ; j++){
        let num = obj[key[j]]-1;
       // console.log(num)
        angCount+=(num*(num+1))/2
    }

    console.log(angCount)
    count+=(n)
}