var data = [4,8,3,7,1,5,9,10]
count = 0 ;
  var result="";
  for (var i=0 ; i<9-count ; i++) {
    if (data[i+1]<data[i]) {
     data.splice(i+1,1);
     count+=1;
    }
    result = result+data[i]+" ";
    }
  console.log(result)