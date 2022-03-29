let input = `5 5 
0 1 2 3 4`;
let newInput = input.split(/[\r\n]+/);
let dim = newInput[0].split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = newInput[1].split(" ").map(Number);

//Serching As binary number===>
let l = 0;
let h = n - 1;
//console.log(arr,l,h)
let isFound = false;
while (l < h) {
    let mid = Math.floor(l + (h - l) / 2);
   // console.log(mid)
    if (arr[mid] === k) {
        console.log(mid);
        isFound = true;
        break;
    }
    else if(arr[mid]>k){
        h = mid - 1;
    }
    else {
        l = mid + 1;
    }
}

if (!isFound) {
    console.log(-1)
}