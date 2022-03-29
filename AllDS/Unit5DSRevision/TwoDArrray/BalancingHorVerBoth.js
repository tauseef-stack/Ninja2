let input = `1
3
*.*
.*.
*.*`
let I = input.split("\n");
let t = Number(I[0]);
let start = 0;
for (var a = 0; a < t; a++){
    let r = Number(I[start + 1]);
    let mat = I.slice(start + 2, start + 2 + r).map(item => item.split(""));
 
   // for (var b = 0; b < Math.floor(r / 2); b++){
    var CHor = 0;
    var CVer = 0;
        for (var i = 0; i < Math.floor(r / 2); i++){
            let res1 = ""; let res2 = ""; let res3 = ""; let res4 = "";
            for (var j = 0; j < r; j++){
                res1 += mat[i][j];
                res3 += mat[j][i]
            }

            for (var k = 0; k < r; k++){
                res2 += mat[r - 1 - i][k]
                res4 += mat[k][r - 1 - i];
            }
            if (res1 === res2) {
                CHor++;
            }
            // console.log(res1,res3)
            if (res3 === res4) {
                CVer++;
            }

            
    }

    if (CHor === Math.floor(r / 2) && CVer === Math.floor(r / 2)) {
           console.log("BOTH")
    }
    else if (CHor === Math.floor(r / 2)) {
        console.log("HORIZONTAL")
    }
    else if (CVer === Math.floor(r / 2)) {
        console.log("VERTICAL");
    }
    else {
        console.log("NO")
    }
        start += r + 1;
    }

   
