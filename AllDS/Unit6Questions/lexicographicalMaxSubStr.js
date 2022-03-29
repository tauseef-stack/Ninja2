let str = "ababaa";
let max = "";
for (var i = 0; i < str.length; i++) {
    if (max.localeCompare(str.substr(i)) <= 0) {
        max = str.substr(i);
    }
}
console.log(max)


let S = "aba";
console.log(S.charAt(0).charCodeAt());