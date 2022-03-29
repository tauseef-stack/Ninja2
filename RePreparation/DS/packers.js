let arr = [1, 2, 3];
let w = 3;
function movers(w, arr, k) {
  if (k === w) {
    return 1;
  } else if (k > w) {
    return 0;
  } else {
    let returnValue = 0;
    for (let i = 0; i < arr.length; i++) {
      returnValue += movers(w, arr, k + arr[i]);
    }
    return returnValue;
  }
}

console.log(movers(w, arr, 0));
