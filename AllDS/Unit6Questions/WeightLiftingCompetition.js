let inout = `1
11
3 1 4 1 5 9 2 6 5 3 5
`
let I = input.split("\n");
let t = Number(I[0]);
for(var a=0 ; a<t ; a++){
    let n = Number(I[2*a+1]);
    let arr = I[2*a+2].trim().split(" ").map(Number);
    let harry = arr[0];
    let jhon = 0;
    let cj = 0;
    let ch = arr[0];
    let i=1;
    let j=n-1;
    while(i<=j){
        while(cj<=ch && i<=j){
            cj+=arr[j];
            j--;
        }
        jhon+=cj;
        ch =0;
        
        while(ch<=cj && i<=j){
            ch+=arr[i];
            i++;
        }
        harry+=ch;
        cj=0
        
    }
  console.log(harry,jhon)
}