function outter() {
  var a = 20;
  return function inner() {
    const a = 50;
    console.log(a);
  };
}
outter()();
