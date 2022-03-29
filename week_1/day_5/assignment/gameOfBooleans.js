var a = true || false || false && false;
console.log(!a)
var b = false || true && false || true;
console.log(b)
var c = false || true || false || false && true;
console.log(!c)
var d = false && true || true || true && false;
console.log(d)
var e = false || false || false && true || false;
console.log(e)