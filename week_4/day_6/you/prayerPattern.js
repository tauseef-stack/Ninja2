var n=4;
for (var i=1 ; i<=n ; i++) {
    result="";
    for (var j=1 ; j<=2*n ; j++) {
        if (j==n-i) {
            result+= "/" ;
        }
        if (j==n+i) {
            result+= "\\" ;
        }
        else {
            result+=" ";
        }
    }
  console.log(result)

}