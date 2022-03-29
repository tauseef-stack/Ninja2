function fun(n) {
    if (n > 100) {
        return n - 10;
    }
    else {
        return fun(fun(n + 11));
    }
}

console.log(fun(95)); //recussive function call. !important.