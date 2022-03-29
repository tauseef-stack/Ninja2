//Time Complexity Expected As O(N)===> instead of N**2
let input = `5
1 2 3 4 5`;
let I = input.split("\n");
let n = Number(I[0]);
let arr = I[1].split(" ").map(Number);

let res = [1];
let prod = 1;
for (var i = 0; i < n-1; i++){
    prod *= arr[i];
    res.push(prod);
}
console.log(res)
let res1 = [];
let prod1 = 1;
for (var i = n-1; i >= 1; i--){
    prod1 *= arr[i];
    res1[i-1]=(prod1);
}
res1.push(1)
console.log(res1)

let ares = "";
for (var i = 0; i < n; i++){
    ares+=(res[i]*res1[i])+" "
}

console.log(ares)
