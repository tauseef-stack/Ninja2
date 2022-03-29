// Test Casess ==>   //  `5 0 6 3 6 1 2 3 4 0 8`
let input = `0 1 0 2 1 0 1 3 2 1 2 1` ; //heights of buildings ==>
let arr = input.split(" ").map(Number);
let n = arr.length;

/*
1) brute force approach ==>
a) find maximum number on both side for each elem of the array then storage = Math.min(leftMax,rightMax)-arr[i];
TC=O(n**2) & SC=O(1); 
*/



/*
2)Better ==>
a)prepare 2 different array prefixMax & suffixMax who carries Max at left and right for each elem 
b) storege = Math.min(preMax,sufMax)-arr[i];
TC=O(n) & SC=O(n);
*/

/*
3)Optimal==> Using 2 pointer and 2 varaibles for storing MaxLeft and Max Right ==>
TC=O(n) & SC=O(1);
*/

function waterTrap(arr,n) {
    let l = 0;
    let h = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;
    while (l <= h) {
        if (arr[l] <= arr[h]) { //Make Sure we have One greater or equal at right now we just need t chech at left only ==> if present Update res if not update max
            if (arr[l] >= leftMax) {
                leftMax = arr[l];
            }
            else {
                res += leftMax - arr[l];
            }
            l++;
        }

        else if (arr[l] > arr[h]) { //this make sure that we have greater at left now just take care for right ==> if present Update res if not update max
            if (arr[h] >= rightMax) {
                rightMax = arr[h];
            }
            else {
                res += rightMax - arr[h];
            }
            h--;
        }
    }
    return res;
    
}

console.log(waterTrap(arr,n))