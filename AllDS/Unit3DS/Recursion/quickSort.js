var arr = [2, 1, 7, 4, 3, 8, 10, 14, 5];
var l = 0;
var h = arr.length - 1; //l & h are the indicess of first and last element.

const sort = (arr, l, h) => {
    if (l < h) {
        p = partition(arr,l,h);
        sort(arr, l, p - 1); //left of pivot position
        sort(arr, p + 1, h);//right of pivot position
    }
   
}


const partition = (arr,l,h) => {//1)placing pivot to its position 2)lesser<pivot<greater.
    var pivot = arr[h];
    var i = l;
    for (var j = l; j < h; j++){
        if (arr[j] < pivot) {
            swap(arr,i, j);
            i++;
        }
    }
    swap(arr,i, h);
    return i; //index of new place of pivot;
}

const swap = (arr,a,b) => {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


sort(arr, l, h);
console.log(arr);
//console.log(arr);