let Input = `1 1 1 0 0 0 1 0 1 1 1 0`;
let arr = Input.split(" ").map(Number);
let n = arr.length;
let group = 0;
let chancess = true;

for (var i = 0; i < n; i++){
    if (arr[i] === 1 && chancess) {
        group++;
        chancess = false;
    }
    else if (arr[i] === 0) {
        chancess = true;
    }
}

console.log(group)