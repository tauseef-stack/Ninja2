//key : sort both arrival and departure array irrespective of any train coming and moving out of the box pair ==>(use 2 pointer and maximum varaible);
let come = `120 50 550 200 700 850`;
let leave = `600 550 700 500 900 1000`;
let arr = come.split(" ").map(Number);
arr = arr.sort((a, b) => {
    return a - b;
})
let dep = leave.split(" ").map(Number);
dep = dep.sort((a, b) => {
    return a - b;
})
let n = arr.length;
let platform = 1;
let maxPlatReq = 1;
let i = 1;
let j = 0;
while (i < n && j < n) {
    if (arr[i] < dep[j]) {
        platform++;
        maxPlatReq = Math.max(platform, maxPlatReq);
        i++;
    }
    else {
        platform--;
        j++;
    }
}
console.log(maxPlatReq)