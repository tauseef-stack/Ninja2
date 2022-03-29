var n = 15 ;

var result ="";
for (var i=2 ; i<=n ; i++) {
    var isPrime = true ;
    for (var j=2 ; j<=Math.sqrt(i) ; j++) {
    if (i%j==0) {
        isPrime = false ;
        break;
        } 
    }
    
    if (isPrime) {
        result+=(i)+" "; 
 
    }
}
    console.log(result)
   



    


