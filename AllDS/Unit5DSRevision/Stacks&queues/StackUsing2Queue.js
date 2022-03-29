//push expenssive ==> pop is not allowed ==>
let input = `6
0 1
0 2
0 3
1 
2
1`
let I = input.split("\n");
let n = Number(I[0]);
let q1 = [];
let q2 = [];
for (var i = 1; i <= n; i++){
    let arr = I[i].split(" ").map(Number)

    //push operation expenssive ==>
    if (arr[0] === 0) {
        if (q1[0] === undefined) {
            q1.push(arr[1]);
        }
        else {
            let i = 0;
            while (q1[0] === undefined) {
                q2.push(q1[i]);
                q1.shift();
                i++;
            }

            q1.push(arr[1]);

             let j = 0;
            while (q2[0] === undefined) {
                q1.push(q2[j]);
                q2.shift();
                j++;
            }
        }
    }
 
    //peek == top ==> 

    else if (arr[0] === 1) {
        console.log(q1[0])
    }

    //pop == using shift ==> 

    else if (arr[0] === 2) {
        q1.shift();
    }
}