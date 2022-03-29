var isPrime = true;
var n = 29;
for (var i=2 ; i**2<=n; i++ ) {
    if (n%i==0) {
        isPrime = false;
        break;
    }
}
 if (isPrime) {
     console.log("Prime")
 }
 else {
     console.log("Not prime")
 }
