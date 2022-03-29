let input = `5`;
let n = Number(input);
function factorial(n) {
    if (n === 0) {
        return 0;
    }
    return Math.log(n)+factorial(n-1);
}

const value = factorial(n);

console.log(value.toFixed(4));


