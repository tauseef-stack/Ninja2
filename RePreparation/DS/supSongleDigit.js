//Finding single digit to prevent integer overflow ==>
let str = "148";
let k = 3;
function single(str) {
  if (str.length === 0) return 0;
  else if (str.length === 1) return Number(str);
  else {
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
      temp += Number(str.charAt(i));
    }
    return single(String(temp));
  }
}

let step1 = single(str);
let step2 = single(String(step1 * k));
console.log(step2);
