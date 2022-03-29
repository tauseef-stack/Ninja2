let input = `4
1 2 3 4
3
0 5
1 3
0 3`

    let newInput = input.split(/[\r\n]+/);
    let n = Number(newInput[0]);
    let arr = newInput[1].split(" ").map(Number);
    let t = Number(newInput[2]);
     for(var a = 0 ; a<t ; a++){
       let dim = newInput[3+a].split(" ").map(Number);
       let c = dim[0];
       let num = dim[1];
       let l=0;     
         let h = n - 1;
         let isFound = false;
        // console.log(n,arr,c,num)
       while(l<h){
         let mid = Math.floor(l+(h-l)/2);
           if (arr[mid] === num) {
               isFound = true;
           if(c===0){
               console.log(n - mid);
           }
           else if (c===1){
               console.log(n - mid - 1);
           }
           break;
         }
         else if(arr[mid]>num){
           h=mid-1;
         }
         else if(arr[mid]<num){
          l=mid+1
         }
         }
         if (!isFound) {
             console.log(0)
         }
     }
  