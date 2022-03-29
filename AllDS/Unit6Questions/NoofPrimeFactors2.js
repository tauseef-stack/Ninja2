let input = `125`;
let n = Number(input);
let count = 0;
let primeBOI = 2;
for (var i = 0; i < n; i++){
    if (n % primeBOI === 0) {
        n /= primeBOI;
    }
    else {
        primeBOI++;
    }
}
console.log( primeBOI )