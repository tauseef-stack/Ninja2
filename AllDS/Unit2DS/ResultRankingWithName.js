var input = `6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`
var newInput = input.split(/[\r\n]+/);
var n = Number(newInput[0]);
var arr = [];

    for(var i=1 ; i<=n ; i++){   //Making Array of Objects,
      var stu =   newInput[i].split(" ");
      var obj = {
        name: stu[0],
        marks: stu[1]
      }
      arr.push(obj);
}
      
//Using sorting algoritham Bubble sort for sorting Alphabetically;
let temp = 0;
for (let i = 0; i < arr.length -1; i++){
  for (let j = 0; j < arr.length - i - 1; j++){
    if (arr[j].name > arr[j + 1].name) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
    
}
console.log(arr)
//Again Sorting According to Marks                 ;
arr = arr.sort(function (a,b) {
  return b.marks-a.marks
})

//Ranking of Students we require 3 variables for ranking.
console.log(arr)
let ranklist = [];
var rank = 1;
var count = 0;
var score = arr[0].marks;
for (let i = 0; i < arr.length; i++){
  if (arr[i].marks === score) {
    count++;
    let elem = `${rank} ${arr[i].name}`;
    ranklist.push(elem)
  }
  else {
    rank += count;
    count = 1;
    let elem = `${rank} ${arr[i].name}`;
    ranklist.push(elem);
    score = arr[i].marks;

  }
}

for (let i = 0; i < ranklist.length; i++){
  console.log(ranklist[i]);
}