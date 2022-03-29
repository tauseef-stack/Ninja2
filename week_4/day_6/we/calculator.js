var calc = 
{
     a : 10 ,
     b : 8 ,
    addition : function() {
        console.log(this.a-this.b) // "THIS" is used to use the value specified in objects 
    },
    subtraction : function() {
        console.log(this.a-this.b)
    },                              // there must be comma at the end of the object after curly bracess.
    multiplication : function() {
        console.log(this.a*this.b)
    },
    division : function() {
        if (this.b==0) {
            console.log("Infinity")
        }
        else {
            console.log(this.a/this.b)
        }

        },  

}
calc.addition();
calc.subtraction();
calc.multiplication();
calc.division();