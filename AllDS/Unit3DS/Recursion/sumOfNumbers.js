let sum = 0;
function fun(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n+fun(n-1)
        
    }
};

let data = fun(6);
console.log(data)