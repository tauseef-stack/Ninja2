const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    if(head===null){
        return null
    }
    let temp1 = head;
   
  
       
        while(temp1.next){
            if(temp1.data===temp1.next.data){
                temp1.next = temp1.next.next
            }
            else{
                
          temp1 = temp1.next
            }
        }
       
    
    return head
};

