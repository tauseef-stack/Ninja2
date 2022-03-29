//similar to merging 2 sorted array ==>
let L = [1, 5, 7, 10, 15];
let n1 = L.length;
let R = [2, 3, 4, 6, 8, 9, 16, 17, 18];
let n2 = R.length;
let F = [];
const merge = (L, R, n1, n2) => {
   
    i = 0; j = 0;
    while (i < n1 && j < n2) {
        if (L[i] < R[j]) {
            F.push(L[i]);
            i++;
        }
        else {
            F.push(R[j]);
            j++;
        }
    }
    while (i < n1) {
        F.push(L[i]);
        i++;
    }
    while (j < n2) {
        F.push(R[j]);
        j++;
    }
}

merge(L, R, n1, n2);
console.log(F);