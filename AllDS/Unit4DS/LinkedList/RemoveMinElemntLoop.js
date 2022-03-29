const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
    if(head===null){
       return null
    }
    let temp = head;
    let min = temp.data;
    let count = 1
    let mycount = 1
    while(temp.next){
      temp = temp.next;
      count++
      if( temp.data<=min  ){
        min = temp.data
        mycount = count
      }
    }
    
    temp = head;
    if(mycount===1){
      temp = temp.next;
      return temp
    }
   if(mycount===2){
     temp.next = temp.next.next;
     return head;
   }
    while(mycount>2){
      temp = temp.next
      mycount--;
    }
     
   
    temp.next = temp.next.next
    
     //console.log(mycount,min)
   return head
};
