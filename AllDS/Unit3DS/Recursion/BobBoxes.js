var n = 7;
const bob = (n,k) => {
    if (k === n) {
        return 1;
    }
    else if (k > n) {
        return 0;
    }
    else {
        return bob(n, k + 1) + bob(n, k + 3) + bob(n, k + 5);
    }
}

console.log(bob(n, 0));