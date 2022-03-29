//Intuition ==> there can be only 2 elements present in the array whose precence can be more than n/3 times ==>
//reduction of big count element with respect to different element reduce 1 after  every 2  (power) ==>
//first find 2 element whose probability of precence is there more than 3 times like moore's voting algoritham ==>
// if you need to return multiple varaible from a function it must be into the form of array or Objects and then Destructure it where we are calling function ==>
//Assumption Made ==> all the elem are positive integers ==>
//test Case ==> 1 1 1 2 3 4 5 6
let input = `1 1 1 3 3 2 2 2`;
let arr = input.split(" ").map(Number);
let n = arr.length;

function moreThanNby3(arr,n) {
let elem1 = -1;
let elem2 = -1;
let count1 = 0;
let count2 = 0;
    for (var i = 0; i < n; i++){

        if (elem1 === arr[i]) {
            count1++;
        }
        else if (elem2 === arr[i]) {
            count2++;
        }
        else if(count1 === 0) {
            elem1 = arr[i];
            count1++;
        }
        else if (count2 === 0) {
            elem2 = arr[i];
            count2++;
        }
        else {
            count1--;
            count2--;
        }
    }
    return [elem1,elem2]
}

const [elem1, elem2] = moreThanNby3(arr, n)
console.log(elem1, elem2)

//finding Count of these 2 elem from the array and then check if it is greater than n/3 or not we cannot directly decide here like previous elem ==> 

let count1 = 0;
let count2 = 0;
for (var i = 0; i < n; i++){
    if (arr[i] === elem1) {
        count1++;
    }
    else if (arr[i] === elem2) {
        count2++;
    }
}
if (count1 > Math.floor(n / 3)) {
    console.log(elem1)
}
if (count2 > Math.floor(n / 3)) {
    console.log(elem2)
}
if (count1 <= Math.floor(n / 3) && count2 > Math.floor(n / 3)) {
    console.log("No Element Present Having Count Greater Than N/3")
}