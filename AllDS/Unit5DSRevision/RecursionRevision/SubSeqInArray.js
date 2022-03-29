let input = `-8 -4 1`
let S = input.split(" ").map(Number)
console.log(S.shift())
let res = [];
let count = 0;
function subSeq(S, res) {
    if (S.length === 0) {
        // console.log(res)
        //  let sum =0
        // for (var i = 0; i < arr.length; i++){
        //     sum += arr[i];
        // }
        // if (sum % 2 !== 0) {
        //     count++;
        // }
        //console.log(res);
        return;
    }
    else {
        subSeq(S.shift(), res.push(S[0]));
        subSeq(S.shift(), res);
    }
};

subSeq(S, res);
console.log(count);