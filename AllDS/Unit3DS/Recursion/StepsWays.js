var n = 3;
var k = 0;
const step = (n,k) => {
    if (k === n) {
        return 1;
    }
    else if (n < k) {
        return 0;
    }
    else {
        return step(n, k + 1) + step(n, k + 2) + step(n, k + 3);
    }
};

console.log(step(n, k));