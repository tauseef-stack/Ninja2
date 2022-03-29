var arr = "HelloWorld";
var arr = arr.split("")
var n = arr.length;
var result= "";
for (var i=0 ; i<n ; i++) {
     if (arr[i]!=arr[i].toUpperCase()) {
         arr[i]=arr[i].toUpperCase();
     }
     else if(arr[i]!=arr[i].toLowerCase()) {
            arr[i]=arr[i].toLowerCase()
      }
      result+=arr[i];
     
}
console.log(result)
