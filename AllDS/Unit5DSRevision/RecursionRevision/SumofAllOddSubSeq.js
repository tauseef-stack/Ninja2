let S = `-8 -4 1`
let res = "";
let count = 0;
function subSeq(S, res) {
    if (S.length === 0) {
        arr = res.split("").map(Number);
         let sum =0
        for (var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        if (sum % 2 !== 0) {
            count++;
        }
        //console.log(res);
        return;
    }
    else {
        subSeq(S.substr(1), res + S.charAt(0));
        subSeq(S.substr(1), res);
    }
};

subSeq(S, res);
console.log(count);