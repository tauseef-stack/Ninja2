let input = `3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`

let I = input.split("\n");
let t = Number(I[0]);
for(var a=0 ; a<t ; a++){
    let dim = I[2*a+1].split(" ").map(Number);
    let n =dim[0];
    let k = dim[1];
    let arr = I[2*a+2].split(" ").map(Number);
    console.log(isSubSumK(arr,n,k))
}

function isSubSumK(arr,n,k){
    let i=0;
    let j=0;
    let sum = arr[j];
    while(i<n && j<n){

        if(sum===k){
            return "Yes"
        }
       else if(sum>k){
            if(i===j){
                sum-=arr[j];
                i++;
                j++;
                sum+=arr[j]
            }
            else{
                sum-=arr[i];
                i++;
            }
        }
        else if(sum<k){
            j++;
            sum+=arr[j]
        }
    }
    return "No"
}

// `10 6
// 1 7 2 8 5 3 9 1 4 2`;