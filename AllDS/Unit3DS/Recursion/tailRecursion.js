function fun(n) {
  if (n == 0) {
    return console.log(0); //stop and reverse.
  } else {
    console.log(n);
    fun(n - 1); //function call after printing tail.
  }
}
fun(4);
