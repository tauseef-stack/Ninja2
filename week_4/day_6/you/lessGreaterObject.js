 var object =
 {
data : [1,2,6,7,4,9,0],
lessThanItems : function() {
    result = "";
    for (var i=0 ; i<this.data.length ; i++) {
        if (this.data[i]<4) {
            result+=this.data[i]+" ";
        }
    }
    console.log(result)
},
greaterThanItems : function() {
    result="";
    for (var i=0 ; i<this.data.length ; i++) {
        if (this.data[i]>6) {
            result+=this.data[i]+ " ";
        }
    }
    console.log(result)
},
 }
 object.lessThanItems();
 object.greaterThanItems();