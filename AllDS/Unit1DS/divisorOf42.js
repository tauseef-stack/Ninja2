var input = `4 2 4 42 3`;
var data = input.split(" ").map(Number);
var result = "";
for (var i=0 ; i<5 ; i++){
    if (data[i+1]<data[i]) {
        data.splice(i+1)

    }
 result = result+data[i]+" ";  
}
console.log(result)