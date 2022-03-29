let input = `5 3
0 1 1 9 9
4 40 0`
let I = input.split("\n");
let dim = I[0].split(" ").map(Number);
let n1 = dim[0];
let n2 = dim[1];
let arr1 = I[1].split(" ").map(Number);
arr1 = arr1.sort((a,b)=>{
    return a-b;
})
let arr2 = I[2].split(" ").map(Number);
  arr2 = arr2.sort((a,b)=>{
    return a-b;
})

function subPair(arr1,n1,arr2,n2){
    let count = 0; let i=0 ; let j=0;
    while(i<n1 && j<n2){
        let num = Math.abs(arr2[j]-arr1[i]);
        if(num<2){
            count++;i++;j++;
        }
        else if(arr2[j]>arr1[i])i++;
        else j++;
    }
    return count;
    
}
console.log(subPair(arr1,n1,arr2,n2))