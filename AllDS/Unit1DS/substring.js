var data = "masai".split("");
var arr = "sai".split("");
var n1 = data.length;
var n2 = arr.length;
var result1 = "";
isSub = true;

/*for (var i=0 ; i<n2 ; i++) {
    result1+=arr[i];
}*/

for (var j=0 ; j<n1 ; j++) {
    var result2 = "";

  for (var k=j ; k<n2+j ; k++) {
    result2+=data[k];
    console.log(result2)
    if (arr==result2) {
      isSub=false;
        break;
      }
  }
   
}
if(isSub) {
  console.log("No")
  }
  else {
      console.log("Yes")
  }