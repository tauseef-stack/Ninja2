var i = 50;
var count = 0;
while(i<=150) {
    if (i%13==0) {
        count++;
        if (count==1){
        console.log(i)
    }
 if (count==3) {
     console.log(i)
     break;
 }
} 
  i++; 
}