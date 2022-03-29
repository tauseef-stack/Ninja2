var arr = "thisracecarisgood";

var len = 1;
for (var i=0 ; i<arr.length ; i++) {
    for (j=i+1 ; j<arr.length; j++) {
       var arr1 = arr.slice(i,j+1);
       var result = "";
       for (var k=arr1.length-1 ; k>=0 ; k--) {
        
           result+=arr1[k];
       }
        if (arr1==result) {
            if (result.length>len) {
                len = result.length
            }

        }
         
    }
   
   
}
console.log(len)
