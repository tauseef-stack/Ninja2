//key => sorting must occur according to its end time of meeting (Then only we can maximize no of meetings) and irrespective of start time, if end time is same then elem which comes have earlier index must come first ==>
//Question ==> we have gives 2 arrays of start and end time we need to print index of meeting+1 which can happen(possible) ==>
let start = `1 0 3 8 5 8`;
let end = `2 6 4 9 7 9`;
let arrS = start.split(" ").map(Number)
let arrE = end.split(" ").map(Number);
let n = arrS.length;
//formation of Object using start,end and index ==>
let res = [];
for (var i = 0; i < n; i++){
    res.push({
        ind: i+1,
        start: arrS[i],
        end:arrE[i],
  })
}
res = res.sort((a,b) => { //end time of meeting and irrespective of start time, if end time is same then elem which comes have earlier index must come first ==> does automatically for us ==>
    return a.end - b.end;
})
console.log(res)

//iterating Through array off objects ==>
let endT = -1;
let startT = -1;
for (var i = 0; i < n; i++){
    if (res[i].start > endT) {
        startT = res[i].start;
        console.log(res[i].ind)
        endT = res[i].end;
    }
}
