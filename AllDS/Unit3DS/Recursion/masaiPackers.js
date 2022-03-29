var n = 3;
var c = 0;
var k = 3;
var arr = [1, 2, 3];
const pack = (c,k,arr,n) => {
    if (c === k) {
        return 1;
    }
    else if (c > k) {
        return 0;
    }
    else {
        let ans = 0;
        for (i = 0; i < n; i++){
            ans += pack(c + arr[i], k, arr, n);
        }
        return ans;
    }
}
console.log(pack(c, k, arr, n));