//key ===> swapping of low and high with respect to mid ==>
//0==> swapping between l&mid and move both forward
//1==> moving only mid by one
//2==> swapping between mid and high and move high only in backward ==>
let input = `1 0 0 1 2 1 2 0 0 1 2`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let l = 0;
let mid = 0;
let h = n-1;
while (mid <= h) {
    if (arr[mid] === 0) {
        let temp = arr[mid];
        arr[mid] = arr[l];
        arr[l] = temp;
        mid++;
        l++;
    }
    else if (arr[mid] === 1) {
        mid++;
    }
    else if (arr[mid] === 2) {
        let temp = arr[mid];
        arr[mid] = arr[h];
        arr[h] = temp;
        h--;
    }
}
console.log(arr)
