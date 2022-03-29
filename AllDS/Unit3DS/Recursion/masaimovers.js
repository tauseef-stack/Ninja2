var n = 3;
var k = 3;
var c = 0;
var arr = [1, 2, 3];
const pack = (c,k,arr,n) => {
    if (c > k) {
        return 0;
    }
    else if (c === k) {
        return 1;
    }
    else { //remember the intuition behind this else block ==>
      var ans = 0;
        for (var i = 0; i < n; i++){
            ans += pack(c + arr[i], k, arr, n);
        }
        return ans;
    }
}
console.log(pack(c, k, arr, n));