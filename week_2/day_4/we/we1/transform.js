function transform1(input) {
    var trimmedString = input.trim();
    var lowerString = trimmedString.toLowerCase();
    var newString = lowerString.replace(" ","");
    var res = "";
    for (var i=0 ; i<newString.length ; i++) {
        if ((i+1)%2==0) {
            res+="&";
        }
        else {
            res+=newString[i]
        }
        }
        console.log(res)

}
var inputString ="            Masai School           ";
transform1(inputString);