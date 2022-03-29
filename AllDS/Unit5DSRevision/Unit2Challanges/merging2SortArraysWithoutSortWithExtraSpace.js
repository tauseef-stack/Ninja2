let input = `4
1 5 7 9
2 4 6 8`;
let I = input.split("\n");
let n = Number(I[0]);
let arr1 = I[1].split(" ").map(Number);
let arr2 = I[2].split(" ").map(Number);
let arr = [];
let l1 = 0;
let l2 = 0;
//Brute Using Extra Space SC=O(2*n) && TC=O(2*n) ;
while (l1 < n && l2 < n) {
  if (arr1[l1] < arr2[l2]) {
    arr.push(arr1[l1]);
    l1++;
  } else if (arr1[l1] > arr2[l2]) {
    arr.push(arr2[l2]);
    l2++;
  } else {
    arr.push(arr1[l1]);
    l1++;
  }
}
if (l1 < n) {
  while (l1 < n) {
    arr.push(arr1[l1]);
    l1++;
  }
} else {
  while (l2 < n) {
    arr.push(arr2[l2]);
    l2++;
  }
}
console.log(arr.join(" "));

//Better ==> SC=O(1) && TC=(n1**2);
//If we dont want use Extra Space Than the solution will be In the form of 2 Arrays Only ==>
//We Will use 2 pointer and Swapping Technique ==>
//Every Time We swap we will use Splice to put elem at correct position;

l1 = 0;
l2 = 0;
while (l1 < n && l2 < n) {
  if (arr1[l1] < arr2[l2]) {
    l1++;
  } else if (arr1[l1] > arr2[l2]) {
    let temp = arr1[l1];
    arr1[l1] = arr2[l2];
    arr2[l2] = temp;
    //After Swapping Need To reOrder the Second Array ==>
    l1++;
    l2++;
    while (arr2[l2] < arr2[0]) {
      l2++;
    }
    arr2.splice(l2++, 0, temp);
    arr2.shift();
    l2 = 0;
  }
}
console.log(arr1, arr2);

//Optimal  ==> Gap matheod  using Always A ceil value ==> gap ==> TC=(nlogn) ==> SC=O(1)==> O(1)==>
let swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

let ar1 = [1, 4, 7, 8, 10];
let ar2 = [2, 3, 9];
let n1 = ar1.length;
let m = ar2.length;
let gap = Math.ceil((m + n1) / 2);
while (gap >= 1) {
  //Iterating over First Array ==>
  for (var i = 0; i + gap < n1; i++) {
    if (ar1[i] > ar1[i + gap]) {
      swap(ar1, i, i + gap);
    }
  }
  //Iterating Over both array simulataneously ==>
  j = gap > n1 ? gap - n : 0;
  while (i < n1 && j < m) {
    if (ar1[i] > ar2[j]) {
      let temp = ar1[i];
      ar1[i] = ar2[j];
      ar2[j] = temp;
    }
    i++;
    j++;
  }
  //Iterating over second Array ==>
  if (j < m) {
    for (var j = 0; j + gap < m; j++) {
      if (ar2[j] > ar2[j + gap]) {
        swap(ar2, j, j + gap);
      }
    }
  }

  //Gap Method ==>
  gap = gap / 2;
  if (gap >= 1) {
    gap = Math.ceil(gap);
  }
}
console.log(ar1, ar2);
