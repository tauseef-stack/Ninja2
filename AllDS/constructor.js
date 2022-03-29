function countConst() {
  var count = 0;
  this.inc = function () {
    count++;
    console.log(count);
  };
  this.dec = function () {
    count--;
    console.log(count);
  };
  this.res = function () {
    count = 0;
    console.log(count);
  };
}

let counter = new countConst();
console.log(counter);
counter.inc();
counter.inc();
counter.inc();
counter.dec();
counter.res();
counter.inc();

//Another way to define constructor as a class component is ==>
class Stack {
  constructor() {
    this.length = 0;
    this.myStack = [];
  }
  push(...data) {
    this.myStack = [...this.myStack, ...data];
    console.log(this.myStack);

    this.length = this.length + data.length;
    console.log(this.length);
  }
  remove() {
    this.myStack.length = Math.max(0, this.length - 1);
    console.log(this.myStack);
    this.length--;
    console.log(this.length);
  }
  peek() {
    console.log(this.myStack[this.length - 1]);
  }
  front() {
    console.log(this.myStack[0]);
  }
}

let stack = new Stack();
console.log(stack);
stack.push("Tauseef", "Shariq", "Zeenat");
stack.remove();
stack.peek();
stack.front();

//Making Stack Using Constructor Function ==>
function JSstack() {
  let myStack = [];
  let length = 0;
  this.push = function (...data) {
    //return a function
    myStack = [...myStack, ...data];
    console.log(myStack);
    length += data.length;
  };
  this.pop = function () {
    myStack.length = Math.max(0, length - 1);
    length--;
    console.log(myStack, length);
  };
}
let jsStack = new JSstack();
console.log(jsStack);
jsStack.push("Maryam", "Yusuf", "Saba");
jsStack.pop();

//pop Concept ==>
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.length = Math.max(0, arr.length - 1); //Prevent Assingning negative value ;
console.log(arr);


