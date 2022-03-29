var arr = "anagram".split("");
var res = arr.sort();
var res = res.join("");
console.log(res)


var arr1 = "nag a ram";
var res1 = arr1.trim();
var res1 = res1.replace(/ /g,"");
var res1 = res1.split("");
var res1 = res1.sort();
var res1 = res1.join("");
console.log(res1)

if (res==res1) {
    console.log("yes")
} 
else {
    console.log("no")
}