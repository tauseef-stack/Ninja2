var input = `4 2 -4 -2`;
var data = input.split(" ").map(Number);
var sum = 0;
for (var i=0 ; i<4 ; i++) {
    if(data[i]<0) {
        sum+=1;
    }
}
console.log(sum)