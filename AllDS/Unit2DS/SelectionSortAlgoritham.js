//Time Complexity O(n**2);
//Space Complexity O(1);
//It arrange Words in Ascending Order Form Starts;
var input = `4 5 1 2 3`;
var arr = input.split(" ").map(Number);
var n = arr.length;
var temp = 0;
var min = 0;
for (var i = 0; i < n-1; i++){
    min = i;
    for (var j = i + 1; j < n; j++){
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    temp = arr[min];
    arr[min] = arr[i]; //swap b/w min and i;
    arr[i] = temp;
}
console.log(arr)
console.log(arr.join(" "));
