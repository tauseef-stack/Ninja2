const str = "masai";


const rev = (str) => {
    if (str.length === 0) {
        return str ;
    }
    else {
      n = str.length;
      return   str.charAt(n-1)+ rev(str.substr(0,n-1));
       
    }
}

 console.log(rev(str))


// function fun(str) {
//   if (str.length == 0) {
//       return str
//   }
//   else {
//       n = str.length;
//       return str.charAt(n-1)+fun(str.substr(0,n-1))
//   }
// }
// console.log(fun('masai'))