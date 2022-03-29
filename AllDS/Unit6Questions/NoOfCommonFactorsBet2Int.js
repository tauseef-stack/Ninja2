let input = `10 15`;
let I = input.split(" ").map(Number);
let a = I[0];
let b = I[1];


function gcd(a,b) {
    if (a === 0) {
        return b;
    }
    return gcd(b % a, a);
}

let n = gcd(a, b);
let count = 0;
for (var i = 1; i <=Math.sqrt(n); i++){
    if (n % i === 0) {
        if (n % i === i) {
            count++;
        }
        else {
            count += 2;
        }
   }
}
console.log(count,n);

