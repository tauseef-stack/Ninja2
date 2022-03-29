var input = `abcc`;
var arr = input.split("");
var n = arr.length;
var count = 0;
var k = 2; //Only Array of Size 2 needs To be count SLidingWindowSize;
var res = "";
function check() {
    for (var j = 0; j < arr.length; j++){
        var obj = {};
        if (obj[arr2[j]] === undefined) {
            obj[arr2[j]] = 1;
        }
        else {
            obj[arr2[j]] += 1;
        }

    }
    console.log(obj);
    let key = Object.keys(obj);
    if (key.length == k) {
        count++;
    }
}
for (var i = 0; i < k ; i++){
    res += arr[i];
}

for (var j = 0; j < n; j++){
    res += arr[k + j] - arr[j];
    console.log(res)
    //check();
}

console.log(count);