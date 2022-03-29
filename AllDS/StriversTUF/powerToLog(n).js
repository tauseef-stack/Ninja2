//find x to power n ==>

//brute force==>
let x = 2;
let n = 10;
let prod = 1;
for (var i = 1; i <= n; i++){
    prod *= x;
};
console.log(prod);

//optimize in log(n) approach ==>
function power(x, n) {
    let prod = x;
    let multiple = 1;
    while (n > 1) {
        if (n % 2 === 0) {
            prod *= prod;
            n = n / 2;
        }
        else if (n % 2 === 1) {
            multiple *= prod;
            n = n - 1;
        }
    }
    return prod*multiple;
};
console.log(power(x, n))


//recursive Approach ==>
function recPower(x, n) {
    if (n === 0) {
        return 1;
    }
    else if (x === 0) {
        return 0;
    }
    else {
        return x*recPower(x,n-1)
    }
}
console.log(recPower(x,n))