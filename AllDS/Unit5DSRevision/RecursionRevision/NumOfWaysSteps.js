let n = 4;
function ways(n, k) {
    if (k > n) {
        return 0;
    }
    if (k === n) {
        return 1;
    }
    return ways(n, k + 1) + ways(n, k + 2) + ways(n, k + 3);
}

console.log(ways(n,0))