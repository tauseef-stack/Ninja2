let input = `6
3 2 1 4 5 6
0`;
let I = input.split('\n');
let n = Number(I[0]);
let arr = I[1].trim().split(" ").map(Number)
let stack = [];
isFound = true;

for (var i = 0; i < n - 1; i++){
    if (arr[i] > arr[i + 1]) {
       stack.push(arr[i])
    }
    else {
        if (arr[i] + 1 === arr[i + 1]) {
            continue;
        }
        else if (stack[0] === undefined) {
            stack.push(arr[i + 1]);
            arr[i+1] = arr[i];
        }
        else if (stack[stack.length - 1]>arr[i+1]) {
            stack.push(arr[i + 1]);
            arr[i+1]=arr[i];
        }
        else if (stack[stack.length - 1] < arr[i + 1]) {
            if (arr[i] + 1 === stack[stack.length - 1]) {
                arr[i]=stack[stack.length - 1];
                stack.pop();
                i--;
            }
            else {
                isFound = false;
                break;
            }
        }
       
    }
}

if (!isFound) {
    console.log("no")
}
else {
    //let temp = arr[i]
    while (stack[stack.length - 1] > arr[i]) {
        if (arr[i] + 1 === stack[stack.length - 1]) {
            arr[i] = stack[stack.length - 1];
            console.log(arr[i])
            stack.pop();
        }
        else {
            break;
        }
         
    }
    if (!stack[0]) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
}
//console.log(stack)

