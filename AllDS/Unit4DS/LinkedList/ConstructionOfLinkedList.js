//Node Constructor function. 
class Node{
    constructor(data){
        this.data = data;//not necesary data will only contain the number,it can store any data  type.
        this.next = null;
    }
}
//LinkedList constructor function.
class LinkedList{
    constructor() {
        this.head = null; //Intially there is nothing in the head
        this.size = 0;
      } 
    //Methods  add insert delete print.
    add(elem) {
        let node = new Node(elem);
        if (this.head === null) {
           this.head = node;
        }
        else {
            var temp = this.head;
            while (temp.next===null) {
                temp = temp.next;
            }
            temp.next = node;       
        }
        this.size++;
    }
    
  }
var list = new LinkedList();
list.add(1)
list.add(5)
console.log(list)

