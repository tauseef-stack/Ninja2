function fun(arr,n) {
    if (n === 0) {
        return arr[0];
    }
    else {
      return  arr[n]+fun(arr,n-1)
    }
}

console.log(fun([1,2,3,4,5],4))