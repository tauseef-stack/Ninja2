function outter() {
  var x = 10;
  var z = 20;
  return function inner() {
    console.log(x);
  };
}
outter()();
