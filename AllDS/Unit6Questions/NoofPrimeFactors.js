let input = `125`;
let n = Number(input);
let count = 0;
for (var i = 1; i <= Math.sqrt(n); i++){
    if (n % i === 0) {
        if (n / i === i) {
            count++
        }
        else {
            count += 2;
        }
    }
}
console.log(count)

// for (var i = 2; i <= Math.sqrt(n); i++){
//     if (n % i === 0) {
//         count++;
//         i--;
//     }
//     else {
        
//     }
// }