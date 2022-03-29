class Stack{
    constructor() { //blue print of an object.
        this.length = 0;
        this.stack = []; //creation of object having length and stack as key and 0&[] value;
    }
    push(...n) {
        // n.forEach((el)=> {
        //     this.stack.push(el)
        //     this.length++;
        // });
        this.stack = [...this.stack, ...n]
        this.length = this.length + n.length;
      
    }
    pop() {
        this.stack.pop();
        this.length--;
    }

}

let mystack = new Stack //we have taken a reference of parent into this
mystack.push(10, 20, 40, 80, 32)
mystack.push(20, 324, 789)
mystack.pop()
mystack.push(22,33,44,55,66,77,88,99,100)
console.log(mystack)

