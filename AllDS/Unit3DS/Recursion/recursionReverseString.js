function fun(str) {
  if (str.length == 0) {
    return str;
  } else {
    return str.charAt(str.length - 1) + fun(str.substr(0, str.length - 1));
  }
}
console.log(fun("masai"));
