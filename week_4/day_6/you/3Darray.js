var input = 
`4 4 4 
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 `
var newInput = input.split(/[\r\n]+/);
var dim = newInput[0].split(" ").map(Number)
var l = dim[0];
var r = dim[1];
var c = dim[2];
var str = newInput[1].split(" ").map(Number);
for(var i=0 ; i<l ; i++){
   for(var j=r*c*(l-1-i) ; j<c*r*(l-i) ; j+=c){
      res="";
     for(var k=j ; k<c+j ; k++){
       res+=str[k]+" ";
  }
  console.log(res)
}
}