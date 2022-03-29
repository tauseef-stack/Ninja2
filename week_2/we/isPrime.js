var isPrime = true;
var n = 49;
for (i=2 ; i<= n-1 ; i++) {
    if (n%i==0){
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Prime")
} else {
console.log("Not Prime")
}
