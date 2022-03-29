let arr = [
  {
    p: 50,
    pw: 15,
  },
  {
    p: 70,
    pw: 5,
  },
  {
    p: 90,
    pw: 3,
  },
  {
    p: 40,
    pw: 145,
  },
  {
    p: 10,
    pw: 10,
  },
];

arr = arr.sort(function (a, b) {
  return a.p - b.p;
});
console.table(arr);
