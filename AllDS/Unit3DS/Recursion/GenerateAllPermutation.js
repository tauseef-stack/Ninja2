var str = "123";
str = str.split("");
var l = 0;
var h = str.length - 1;
const gp = (str, l, h) => {
  if (l === h) {
    //since all are of same size.
    console.log(str.join(""));
    return;
  } else {
    for (var i = l; i <= h; i++) {
      swap(str, l, i);
      gp(str, l + 1, h);
      swap(str, l, i);
    }
  }
};

const swap = (str, a, b) => {
  let temp = str[a];
  str[a] = str[b];
  str[b] = temp;
};

gp(str, l, h);
