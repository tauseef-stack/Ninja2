var n = 25;
count=0 ;
var k=1;
for (var i=1 ; i<=n ; i=i+((k+1)*k)/2) {
  count+=1;
   k+=1;
}
console.log(count)