//Shadowing in Block Scope ==>
let a = 25;
function outter() {
  var a = 35;
  console.log(a);
  {
    let a = 45;
    console.log(a);
  }
}
outter();
