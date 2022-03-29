//Works on principle of Dicvide and Conquor ==> Divides to the first level of elem then merges these 2 ==>



let arr = [18, 17, 16, 1, 5, 7, 10, 15, 2, 5, 3, 4, 6, 8, 9];
let l = 0;
let h = arr.length - 1;

const sort = (arr, l, h) => {
 let m = l + Math.floor((h - l) / 2);
    if (l < h) { //this make sure that atleast 2 elem must be there ==>
        sort(arr, l, m); //This will divide left half upto single,
        sort(arr, m + 1, h); //THis will divide right half into single
        merge(arr, l, m, h); //merging elements..
        return;
    }
  
}

const merge = (arr,l,m,h) => {
    let n1 = m - l + 1; //left half
    let n2 = h - m;  //right half
    let L = [];
    let R = [];

    //two for loops are only for copying the elements.
    for (let i = 0; i < n1; i++){
        L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];  
    }

   let i = 0;let j = 0;let k = l;//these two again must be zero;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++
    }
    while (j < n2) {
        arr[k] = R[j];
         j++;
         k++;
    }
}

sort(arr, l, h);
console.log(arr);