//problem merging 2 sorted Arrays ==>
//tesr casess =>  // `1 4 7 8 10 2 3 9`
let input = `1 3 7 6 10
2 4 8 9`;
let I = input.split("\n");
let arr1 = I[0].split(" ").map(Number);
let arr2 = I[1].split(" ").map(Number);
let arr = arr1.concat(arr2);
let n = arr.length;

//Using Gap Method ==> space=O(1) && time=nlog(n);
let gap = Math.ceil(arr.length/2); //remember ==>
while (gap >= 1) {
    let i = 0;
    let j = gap
    while (j < n) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        i++;
        j++;
    }
    gap = (gap / 2);
    if (gap > 1) {
        gap = Math.ceil(gap);
    }
}
console.log(arr)

//Using insertion sort(merge Sort) space=O(n) && time=O(n) ==> pointer approach ==>
let newArr = [];
let i = 0; //for 1st array
let j = 0; // for second array ==>
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i])
        i++;
    }
    else {
        newArr.push(arr2[j])
        j++;
    }
}

if (i === arr1.length) {
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++;
    }
}
else {
    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++;
    }
}
console.log(newArr);


//Array Concatination ==>

myarr1 = [1, 2, 3, 4, 5];
myarr2 = [9, 8, 7, 6];
myarr1.concat(myarr2);
console.log(myarr1.concat(myarr2));
