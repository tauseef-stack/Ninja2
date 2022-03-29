let input = `1
5 5
1 5 1 3 2`

let I = input.split("\n");
let t = Number(I[0]);
for(var a=0 ; a<t ; a++){
let dim = I[2*a+1].trim().split(" ").map(Number);
let n = dim[0];
let k = dim[1];
let arr = I[2*a+2].trim().split(" ").map(Number);
     console.log(subArr(arr,n,k))
}


function subArr(arr,n,k){
    let i=0;
    let j=0;
    let count =0;
    let sum = arr[j];
    while(i<n && j<n){
      // console.log(sum)
        if(sum>=k){
            if(i===j){
                sum-=arr[j]
                i++;j++;
                sum+=arr[j]
            }
            else{
            sum-=arr[i];
            i++;
            }
        }
        else if(sum<k){ //below Three sequencess are very important ==> remember==>
            j++;
            count+=(j-i);
            sum+=arr[j]
        }
    }
    
    return count
}