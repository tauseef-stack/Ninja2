function foo() {
  console.log(a);
}
var a = 5;
function boo() {
  var a = 3; // local scope
  foo();
}
// global scope

boo();
