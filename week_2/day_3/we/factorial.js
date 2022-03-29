function runProgram(input) {
    var n = Number(input);
var fact = 1;
while(n>0){
fact = fact*n;
n--;
}
console.log(fact)

}
if (process.env.USERNAME === "USER") {
    runProgram(`6`)
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}