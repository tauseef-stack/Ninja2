///Complete UnderStanding of Slice and Splice ==>
//SLICE(START,EXLUDINGEND) ==> return new Array without altering existing array ==>
//follows [,) (incliding Start,excluding End) convention =>
//Also takes negative index to offset from end ==>
//No SAgrument passed returns Same array ==>
//If no elements left in the array return empty array ==>
//if second argument is missing default:arr.length;==>

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1 = arr.slice(-5, 8);
console.log(arr1);

//SPLICE(START(negative,end,offset),DELETEcOUNT,ITEM......N) ==> (Alter the existing Array) ===>  Ued to alter Existing Array  ==>
//it Also return the new array but unlike slice it alters the existing array and only elem left in existing array which is not in splice array ====> oldArr = spliceArr + AlterOldArr
//Doesn't takes negative offset argument like slice ==>
let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myarr1 = myarr.splice(-3, 3, 1, 1, 1);
console.log(myarr, myarr1);

//SOME(extreme atleast one) ==> returns true or false (boolean not array) =>
let some = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let everyBol = some.every((item, i) => item > 0);
console.log("from every", everyBol);
someBol = some.some((item, i, some) => {
  console.log(i, some);
  return item > 5;
});
console.log("from Some", someBol);

let find = some.findIndex((item) => item > 9);
console.log("from find", find);

let include = some.includes(9, -1);
console.log("from include", include);

let concat = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
console.log("from concat", concat);

let fill = Array(5).fill(5, -5);
console.log("from fill", fill);

let from = Array.from(some, (elem, i) => elem + i);
console.log("from from", from);

let join = [1, 2, 3].join();
console.log(join);

//REDUCE(acc,item)==> If an initialValue was supplied in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array.
// If no initialValue was supplied, then previousValue will be equal to the first value in the array and currentValue will be equal to the second.
//==>
let reduce = [1, 2, 3, 4].reduce((acc, item) => item * acc, 10);
console.log("from first reduce", reduce);

let flat = [1, 2, 3, [[[4, 5]]]].flat(2);
console.log("from flat", flat);

let isArray = Array.isArray([[{ 2: 1 }]]);
console.log("from isArray", isArray);

lastInd = [1, 2, 3, 4, 1, 5, 6, 1, 1, 1].lastIndexOf(1, -3);
console.log("from last ind", lastInd);

let reduc = [1, 2, 3, 4, 5].reduce((a, b) => a / b, 5);

console.log("from second reduce", reduc);

//forEach Dosn't return the array ? it just iterate once through the array ==>
//If we try to store and access the value of forEach it will give undefined ==>
let bforEach = [1, 2, 3];
bforEach.forEach((ele) => console.log(ele));
console.log("no change after for Each", bforEach);

let bmap = [1, 2, 3, 4, 5];
let amap = bmap.map((ele) => ele * 2); //it return an array by performing specified oertion on each element
console.log("before map", bmap);
console.log("after map", amap);
