var str = "148";
var k = 3;
const supDigit = (str) => {
    if (str.length === 0) {
        return 0;
    }
    else if (str.length === 1) {
      
      //  console.log(Number(str));
        return Number(str);
    }
    else {
      var temp = 0;
        for (var i = 0; i < str.length; i++){
            temp+=Number(str.charAt(i));
        }
        // console.log(temp)
        // console.log(String(temp));
      return supDigit(String(temp));
    }
   
}

let ans = supDigit(str);
ans = ans * k;
console.log(supDigit(String(ans)));