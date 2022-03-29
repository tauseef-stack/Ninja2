var input = `5 0
2 -2 0 3 4`;
let newInput = input.split(/[\r\n]+/);
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = newInput[1].split(" ").map(Number);
arr = arr.sort((a, b) => {
    return a - b;
});
let l = 0;
let h = n - 1;
let recBinary = (arr,k,l,h) => {
    if (l > h) {
        return false;
    }
    let mid = Math.floor(l + (h - l) / 2);

     if (arr[mid] === k) {
        return true;
    }
    else if (arr[mid] > k) {
        return recBinary(arr,k,l,mid-1)
    }
    else {
        return recBinary(arr,k,mid+1,h)
    }
}

if (recBinary(arr, k, l, h)) {
    console.log(1);
}
else {
    console.log(-1);
}