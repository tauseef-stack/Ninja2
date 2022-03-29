var str = `abcd`;
const gss = (str, res) => {
    if (str.length === 0) {
        console.log(res);
        return;
    }
    else {
        gss(str.substring(1), res);
        gss(str.substring(1), res + str.charAt(0));
       
    }
}
gss(str, "");