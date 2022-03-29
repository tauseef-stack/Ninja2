function runProgram(input) {
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var c = Number(newInput[1]);
    var count = 0;
  while(c <= a) {
    if (a % c==0) {
      count+=1;
    }
    c++;
  }
   console.log(count)
}
if (process.env.USERNAME === "USER") {
    runProgram(`15 1`)
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