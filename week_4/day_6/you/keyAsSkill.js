var arr =
{
Nrupul : ["cmd","python","sql"], // arr.Nrupul [0,1,2]
Prateek : ["js" ,"algo"],
Aman : ["ds","algo"],
Albert : ["js","react"],
}
 for(key in arr){
  for (var i=0 ; i<arr[key].length ; i++) {
     if (arr[key][i]=="js") {
         console.log(key)
     }
 }
}
 
