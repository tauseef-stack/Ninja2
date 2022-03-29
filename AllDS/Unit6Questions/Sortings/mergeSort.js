let input = `9 4 7 6 3 1 5`;
let arr = input.split(" ").map(Number);
let n = arr.length;
let l = 0;
let h = n - 1;

function mainMergeSort(arr,l,h) {
    if (l < h) {
        let mid = Math.floor(l + (h - l) / 2);
        mainMergeSort(arr, l, mid);
        mainMergeSort(arr, mid + 1, h);

        merge(arr, l, mid, h);
    }
    
}

    let res = [];
function merge(arr, l, mid, h) {
    let i = l;
    let j = mid + 1;
    let k = l;
    while (i <= mid && j <= h) {
        if (arr[i] < arr[j]) {
            res[k] = arr[i];
            i++;
        }
        else {
            res[k] = arr[j];
            j++;
        }
        k++;
    }
    if (i > mid) {
       while (j <= h) {
            res[k] = arr[j];
            j++;
            k++;
        }
    }
    else {
        while (i <= mid) {
            res[k] = arr[i];
            i++;
            k++;
        }
    }
}

mainMergeSort(arr, l, h);
console.log(res)