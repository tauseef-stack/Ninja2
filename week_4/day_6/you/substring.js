var arr = "1234";
var count = 1;
var len = 0;
for (var i=0 ; i<arr.length ; i++) {
    result="";
    for (var j=i ; j<arr.length ; j++) {
         result+=arr[j]
         console.log(result)
    var res1 = "";
    for (var k=result.length-1 ; k>=0 ; k--) {
        res1+=result[k];
        console.log(res1)
    if (res1==result && result.length>len) {
        count+=1;
    }
}
    }
}

console.log(count)