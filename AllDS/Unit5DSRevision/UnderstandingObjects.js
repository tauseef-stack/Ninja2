let input = `2 1 1 1 1`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let obj = {};
for (var i = 0; i < n; i++){
    if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
    }
    else {
        obj[arr[i]] += 1;
    }
}

//console.log(obj);
let key = Object.keys(obj);
if (n % 2 === 0) {
    if (obj[key[1]] === undefined) {
        console.log("YES")
    }
    else if (obj[key[0]] % 2 === 0 && obj[key[1]] % 2 === 0) {
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}

else if (n % 2 !== 0) {
    if (obj[key[1]] === undefined) {
        console.log("YES")
    }
    else if (obj[key[0]] % 2 === 0 || obj[key[1]] % 2 === 0) {
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}