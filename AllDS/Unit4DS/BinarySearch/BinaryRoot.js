let input = `37`;
let n = Number(input);
let l = 0;
let h = Math.floor(n/2);
let val = 0;
function root(n) {
    while (l <= h) {
        let mid = Math.floor(l+(h-l)/2) 
        if (mid <= n/mid) { //to prevent variable overflow.
          val = mid;
            l = mid + 1;
        }
        else {
            h = mid-1;
        }
    }
       return val
    }



console.log(root(n))
