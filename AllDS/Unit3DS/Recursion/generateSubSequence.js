var str = "abcd";
var res = "";


const sub = (str,res) => {
    if (str.length === 0) {
        return console.log(res);
    }
    else {
        sub(str.substr(1), res + str.charAt(0));
        sub(str.substr(1), res);   
    }
}
 sub(str, res);

