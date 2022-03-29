var input = `2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`
let I = input.split("\n");
  let t = Number(I[0]);
  let start = 0;
  for(var a = 0 ; a<t ; a++){
    let r = Number(I[start+1]);
    let mat = I.slice(start+2,start+2+r).map((item)=> {
      return item.split(" ").map(Number);
    });
    for(var i=r-1; i>=0 ; i--){
       var res = "";
      for(var j=r-1 ; j>=0 ; j--){
        res+=mat[i][j]+" ";
      }
      console.log(res)
    }
    start+=r+1
};