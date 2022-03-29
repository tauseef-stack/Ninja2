let input = `39 27 11 4 24 32 32 1`
let arr = input.split(" ").map(Number);
let resL = [];
let stackL = [];
let n = arr.length

//nearest Smaller Left ==> stackR from left to right no need to reverse ==>
for (var i = 0; i < n; i++){
    while (stackL[stackL.length - 1] !== undefined && stackL[stackL.length - 1].val >= arr[i]) {
        stackL.pop();
    }
    if (stackL[stackL.length - 1] === undefined) {
        resL.push({
            ind: -1,
            val:-1,
        });
        stackL.push({
            ind: i,
            val:arr[i]
        })
    }
    else if (stackL[stackL.length - 1].val < arr[i]) {
        resL.push(stackL[stackL.length - 1]);
        stackL.push({
            ind: i,
            val:arr[i],
        })
    }
}

console.log(resL)

//nearestSmaller Right(nextSmaller) ==>
let resR = [];
n = arr.length
let stackR = [];
for (var i = n-1; i >= 0; i--){
    while (stackR[stackR.length - 1] !== undefined && stackR[stackR.length - 1].val >= arr[i]) {
        stackR.pop();
    }
    if (stackR[stackR.length - 1] === undefined) {
        resR.push({
            ind: -1,
            val:-1,
        });
        stackR.push({
            ind: i,
            val:arr[i],
        })
    }
    else if (stackR[stackR.length - 1].val < arr[i]) {
        resR.push(stackR[stackR.length - 1]);
        stackR.push({
            ind: i,
            val:arr[i],
        })
    }
}
resR = resR.reverse(); 
console.log(resR)

//Comparision of Indicess ==>
let resF = [];
for (var i = 0; i < n; i++) {
    if (resL[i].val === -1) {
        resF.push(resR[i].val);
    }
    else if (resR[i].val === -1) {
        resF.push(resF[i].val)
    }
    else {
        let Ldiff = i - resL[i].ind;
        let Rdiff = resR[i].ind - i;
        if (Rdiff < Ldiff) {
            resF.push(resR[i].val)
        }
        else {
            resF.push(resL[i].val)
        }
    }
}

console.log(resF.join(" "))
