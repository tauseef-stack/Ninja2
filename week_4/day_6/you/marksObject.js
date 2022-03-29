var data = {
   arr : [{name:"Nrupul", marks : 10} , 
   {name:"Prateek",marks:20},
   {name:"Aman" , marks : 30} ,
   {name:"Albert", marks:5} 
   ,{name:"Yogesh" , marks : 15} ],  
average : function() {
   count = 0;
   for (var i=0 ; i<(this.arr.length) ; i++) {
count+=this.arr[i].marks;
   }
   console.log(`Average of Marks is ${count/this.arr.length}`)
},
maximum : function() {
   var max = this.arr[0].marks
   for (var i=0 ; i<this.arr.length ; i++) {
      if (max < this.arr[i].marks) {
         max = this.arr[i].marks ;     
      }
   }
   for (var i=0 ; i<this.arr.length ; i++) {
      if (this.arr[i].marks == max) {
         console.log(this.arr[i])
         break;
      }
   }  
},
minimum : function() {
   var min = this.arr[0].marks;
   for (var j=0 ; j<this.arr.length ;j++) {
      if (min>this.arr[j].marks) {
        min = this.arr[j].marks;
       }
   }
   for (var j=0 ; j<this.arr.length ; j++) {
      if (this.arr[j].marks==min) {
         console.log(this.arr[j])
      }
   }
},
}
data.average()
data.maximum()
data.minimum()