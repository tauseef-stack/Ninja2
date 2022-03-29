let arr = new Array(1, 2, 3, 4, 5, 6, 7);
Array.prototype.print = function () {
  console.log(this);
};
arr.print();
