var rectangle = 
{
    length : 25,
    width : 20 ,
    perimeter : function() {
        console.log(`Perimeter of rectangle is ${2*(this.length+this.width)}`)
    },
    area : function() {
        console.log(` Area of rectangle is ${this.length*this.width}`)
    },

}
rectangle.perimeter();
rectangle.area();
