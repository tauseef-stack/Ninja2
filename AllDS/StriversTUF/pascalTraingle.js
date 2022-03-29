/*
           1
          1  1
        1   2  1
      1   3   3  1
    1   4   6   4  1
*/
//Code for printing Whole Traingle  ==>
let row = 5;
let arr = Array(row).fill(0).map((item)=>Array(row).fill(0))//creation of 2D array==> 
console.log(arr)
for (var i = 0; i < row; i++){
  for (var j = 0; j <= i; j++){
    if (i === j || j === 0) {
      arr[i][j] = 1;
    }
    else {
      arr[i][j] = arr[i-1][j]+arr[i-1][j-1]
    }
  }
}
console.log(arr);



//Optimization approach==> 
for (var i = 1; i <= row; i++){
  let res = "";
  let c = 1;
  for (var j = 1; j <= i; j++){
    res += c + " ";
    c = c*(i - j) / j;
  }
  console.log(res)
}






//Elelment at position m*n in pascal Traingle is given by ==> (r-1)C(c-1)===> nCr
let c = 3;
c = c - 1;
let r = 5;
r = r - 1;
let res = 1;
for (i = 0; i < c; i++){
  res *= r - i;
  res /= (i + 1);
}
console.log(res)


