var n = 9876;
var sum=0;
for(var i=n ; i>=1 ; i/=10){
    
    sum+=i;
}
console.log(Math.round(sum));