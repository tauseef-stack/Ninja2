let input = `5
2 2 2 7 9`
let I = input.split("\n");
let n = Number(I[0]);
let arr = I[1].trim().split(" ").map(Number);
let j=0;
for(var i=0 ; i<n-1 ; i++){
    if(arr[i]!==arr[i+1]){
        j++;
        arr[j]=arr[i+1];
    }
}
j++;

arr = arr.slice(0,j)
console.log(arr.join(" "))
