var n = `60 72`;
var t = n.split(" ").map(Number);
var a = t[0];
var b = t[1];

for (var i=0 ; i<=a && i<=b ; i++ ) {
    if(a%i==0 && b%i==0) {
     var  result=i;
    }
}
console.log(result)
lcm = (a*b)/result;
console.log(lcm)
