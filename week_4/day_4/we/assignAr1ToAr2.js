var ar1 = [1,2,3,456,78,63,34]
var ar2 = ar1 ;  // it will give same memory location f ar1 to ar2.
                // now Whatever changes we will made in ar1 will also be made in ar2.
                // since both has same memory location.

ar1.sort(function(a,b) {
    return a-b ;
});
console.log(ar1) // in order to keep the arr2 value same we will have to assign it a new Arr.
console.log(ar1)