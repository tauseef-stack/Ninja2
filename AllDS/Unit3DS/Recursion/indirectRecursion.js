//Two diff function calling their self with each others initself.
function f1(n) {
    if (n == 0) {
        return 
    }
    else {
        console.log(n);
        f2(n - 1);
    }
}

function f2(n) {
    if (n < 1) {
        return
    }
    else {
        console.log(n)
        f1(Math.floor(n/2))
    }
}
f1(10);