//v.imp to understand greedy approach ==>
//Question we have given n no jobs with its deadline (each job take day to complete) and profit ==> we need to find no of jobs can  be performed and maximum profit that can be generated with job sequence ind+1;

let deadLine = `4 5 6 6 4 2 2 2`;
let profit = `20 60 70 65 25 80 10 22`;
let dead = deadLine.split(" ").map(Number);
let prof = profit.split(" ").map(Number);
let n = dead.length;
//first make array of objects and sort the array on the basiss of profit ==>
//take an empty array of size = Maximum dead line present in the array, and start filling the array according to its last deadline

let res = [];
for (var i = 0; i < n; i++){
    res.push({
        ind: i + 1,
        dead: dead[i],
        prof:prof[i],
    })
}
res = res.sort((a, b) => {
    return b.prof - a.prof;
})
console.log(res)

//One full loop for finding Maximum Deadline ==>
let maxDead = -1;
for (var i = 0; i < n; i++){
    maxDead = Math.max(maxDead,res[i].dead)
}
console.log(maxDead)

//genrate the array of Size = Maximum Dead Line and fill it with -1;
let myRes = Array(maxDead).fill(-1)
//console.log(myRes)

//Iterating Through Main Object array and Calculating netProfit ==>
let totalProfit = 0;
let totalJobCount = 0;
for (var i = 0; i < n; i++){
    for (j = res[i].dead - 1; j >= 0; j--){
        if (myRes[j] === -1) {
            myRes[j]=(res[i].ind);
            totalProfit += res[i].prof;
            totalJobCount += 1;
            break;
        }
    }
}
console.log(totalProfit,totalJobCount,myRes)

