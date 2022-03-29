var n = 32*32;
ispower = true;
for (var i=2 ; i<=n ; i*=2) {
    if (n==i) {
        console.log("Yes")
        ispower = false;
        break;
    }
}
 if (ispower) {
     console.log("No")
 }