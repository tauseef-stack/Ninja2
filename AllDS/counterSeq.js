var input = `3
3 2 1
1 3 2`
let I = input.split('\n');
let n = Number(I[0]);
let arr1 = I[1].trim().split(" ").map(Number);
let arr2 = I[2].trim().split(" ").map(Number);
let i=0;
let count = 0;
while (arr1[i] !== undefined) {
    //console.log(count)
    if(arr1[i]===arr2[i]){
        count++;
        arr1.shift();
        arr2.shift();
      
    }
    else{
        let temp = arr2[i];
        arr2[i] = arr2[i + 1];
        arr2[i + 1] = temp;
        count++;
       // console.log(arr2)
        
    }
}

console.log(count)