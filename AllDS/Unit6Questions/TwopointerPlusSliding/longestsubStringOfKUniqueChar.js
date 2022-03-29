let str = "aabacbebebe";

let i = 0;
let j = 0;
let res = "";
let obj = {};
let n = str.length;
let k = 3;
let arr = [];
let maxStr = "";
let prevLength = 0;

while (j < n) {
    if (obj[str.charAt(j)] === undefined) {
        obj[str.charAt(j)] = 1;
    }
    else {
        obj[str.charAt(j)]+=1
    }
  
    let key = Object.keys(obj);
    if (key.length <= k) {
        res += str.charAt(j)
       // console.log(res)
        j++;
    }
    
     else if (key.length > k) {
        arr.push(res)
        if (res.length > prevLength) {
            maxStr = res;
            prevLength = res.length;
        }
        while (key.length > k) {
            obj[str.charAt(i)] -= 1;
            res = res.substr(1);
           // console.log(obj)
    
            if (obj[str.charAt(i)] === 0) {
                delete obj[str.charAt(i)]
            }
        key = Object.keys(obj);
        i++;
       } 
    }
  
}
if (res.length > prevLength) {
    maxStr = res;
}
arr.push(res)
console.log(res,arr,maxStr)