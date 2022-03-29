//illegal shadowing ==>
//you cannot declare varable with the same nname in a same herarachy scope ==>
function z() {
  var a = 20;
  function y() {
    var b = 30;
    function x() {
      console.log(a, b);
    }
    x();
  }
  y();
}
z();
