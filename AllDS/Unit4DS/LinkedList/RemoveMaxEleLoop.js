const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMaximum = function (head) {
    if(head===null){
      return null
    }
   let temp = head ; 
   let max = temp.data;
   let count = 1;
   let mycount = 1;
   //for finding position of max element;
   while(temp.next){
     temp = temp.next;
     count++;
     if(temp.data>=max){
       max = temp.data;
       mycount = count;
     }
   }
   //again bring back temp to head;
    temp = head;
  
    //if element is at first place
  if(mycount===1){
    temp = temp.next
    return temp;
  }
  
 //if element is at second position
  if(mycount===2){
     if(!temp.next.next){ //if only 2 element exist
        temp.next = null
        return temp;
     }
     temp.next = temp.next.next //if more than 2
       return head;
  }
  
 // if element is at last position and position >2
  if(mycount===count){
     while(mycount>2){
       temp = temp.next
         mycount--;
     }
    temp.next = null;
    return head;
  }
  
 //if element is not at 1 2 last then
  while(mycount>2){
     temp = temp.next;
     mycount--;
  }
    temp.next = temp.next.next;
    return head;
};
