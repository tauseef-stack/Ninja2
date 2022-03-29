var input = `1 2 3 4 `;
var data = input.split(" ").map(Number);
var result="";
for (var i=0 ; i<4 ; i++) {
result=result+data[3-i]+" ";
}
console.log(result)