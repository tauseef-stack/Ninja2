
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let current = head;
    let prev = null ;
    let next;
    while(current){ //prev.next(both are ok)
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    head = prev;
    return head
}

