//Test Casess ==> 1) 2 2 2 2 5 5 5 5 5    2) 5 5 5 5 5 2 2 2 2     3) 5 2 5 2 5 2 5 2 5
//Its is ensures that one element must be present more then ==> Math.floor(n/2) times ==>
//intuition ===> there must bee only one element which can present more then one times in the Whole Array ==>
let input = `7 7 5 7 5 1 5 7 5 5 7 7 5 5 5 5`;
let arr = input.split(" ").map(Number);
let n = arr.length;


function electionMajority(arr, n) {
    let count = 0;
    let elem = 0;
    for (var i = 0; i < n; i++){
        if (count === 0) {
             elem = arr[i];
        }
        if (elem === arr[i]) {
            count++;
        }
        else {
            count--;
        }
        return elem;
    }
}

console.log(electionMajority(arr,n))
