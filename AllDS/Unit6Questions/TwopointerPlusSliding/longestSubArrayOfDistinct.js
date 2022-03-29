let input = `3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`
let I = input.split("\n");
let t = Number(I[0]);
for(var a=0 ; a<t ; a++){
    let n = Number(I[2*a+1])

    let arr = I[2 * a + 2].split(" ").map(Number);
    console.log(lsubb(arr,n))
    //city(arr,n,k)===1000000 ? console.log(-1) : console.log(city(arr,n,k))
}

function lsubb(arr,n) {
    let len = 0;
    let max = 0;
    let obj = {};
    let i = 0;
    let j = 0;
    while ( j < n && i < n) {
        if (!obj[arr[j]]) {
            obj[arr[j]] = 1;
            max = Math.max(max, j-i+1);
            j++;
        }
        else {
            delete obj[arr[i]];
            i++;
        }
    }
    return max
}