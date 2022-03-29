var ironMan = 1974;
var year_of_birth =
{
    a : 2021,
    age : function() {
console.log(`Age is ${this.a-ironMan}`)
    },
}
year_of_birth.age();