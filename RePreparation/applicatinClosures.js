//Data Encapsulation ==>
function Counter() {
  var count = 0;
  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}
let count1 = new Counter();
count1.increment();
count1.increment();
count1.increment();
count1.decrement();
