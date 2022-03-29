var result = 2;
for (var i=3 ; i<=5 ; i++) {
    var isprime = true;
   for (var  j=2 ; j<i ; j++) {
    if (i%j==0) {
      isPrime = false;
      break;
    }
  }
  if (isprime) {
      result+=(i);
    console.log(result)
  }
}