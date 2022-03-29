var arr = "1 2 3";
var res = arr.split(" ").map(Number);
var sum = 0 ;
var count = 0;
for (var i=0 ; i<res.length ; i++) {
    for (var j=i ; j<res.length ; j++) {
        sum+=res[j];
        console.log(res[j],sum)
        if (sum%2==0) {
            count+=1;
        }
    }
    sum =0;
}
console.log(count)