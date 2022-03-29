 var name = "masaischool";
 var arr =  [];
 for (var i=0 ; i<26 ; i++) {
     arr.push(0)
 }
 console.log(arr)

 for (var i=0 ; i<name.length ; i++) {
   arr[name.charCodeAt(i)-97]+=1;

 }
 console.log(arr)
 
