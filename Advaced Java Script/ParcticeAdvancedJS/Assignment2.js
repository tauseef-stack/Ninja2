var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [];
for (var i = 0; i < arr1.length; i++){
    arr2.push(arr1[i]);
}
console.log(arr2);
arr2[3] = 35;
console.log(arr1, arr2);
