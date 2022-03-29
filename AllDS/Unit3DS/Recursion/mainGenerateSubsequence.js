let S = `abcd`;
let arr = [];
function subSeq(S, res) {
  if (S.length === 0) {
    arr.push(res);
    return;
  } else {
    subSeq(S.substr(1), res + S.charAt(0));
    subSeq(S.substr(1), res);
  }
}

subSeq(S, "");
arr = arr.sort();
console.log(arr);
