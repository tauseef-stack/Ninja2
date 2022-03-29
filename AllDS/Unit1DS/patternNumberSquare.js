var  n = 4 ;
var k = 0;
for (var i=1 ; i<=n**2 ; i+=n) {
    result="";
    for (var j=i ; j<n+i ; j++) {
result+=j+" ";

    }
    console.log(result)
}
