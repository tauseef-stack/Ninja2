let input = `1
6
1 2 2 3 4 5
4 4 3 2 1 1`
let I = input.split("\n");
let t = Number(I[0]);
for(var a=0 ; a<t ; a++){
    let n = Number(I[3 * a + 1]);
    let arr1 = I[3 * a + 2].split(" ").map(Number);
    let arr2 = I[3 * a + 3].split(" ").map(Number);
    console.log(twoSort(arr1,arr2,n))
}

function twoSort(arr1, arr2, n) {
    let i = 0;
    let j = n - 1;
    let count = 0;
    while (i < n && j >= 0) {
        if (arr1[i] === arr2[j]) {
            count++;
            i++;
            j--;
        }
        else if (arr1[i] > arr2[j]) {
            j--;
        }
        else {
            i++;
        }
    }
    return count;
}