const str = "masai";
const length = (str) => {
    if (str === "") {
        return 0;
    }
    else {
        return length(str.substr(1)) + 1;
    }
}

console.log(length(str))