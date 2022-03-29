//requires bcoz of negative sign ==> 
const input = `4
1 2 3 4`

    const newInput = input.split('\n');
    const arr = newInput[1].split(" ").map(Number);
    // console.log(arr)

    function getAllSubsequence(ans,arr,low,high){
        if(low<=high && ans != ""){
            console.log(ans)
            
        }
        for(let i = low;i<high;i++){
            getAllSubsequence(ans+arr[i],arr,i+1,high)
        }
    }
    getAllSubsequence("",arr,0,arr.length)