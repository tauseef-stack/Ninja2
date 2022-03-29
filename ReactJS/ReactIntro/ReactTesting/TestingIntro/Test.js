function test(descriptions,callback) {
    console.log(descriptions);
    callbck();

}

function expect(recieved) {
    function toBe(expected) {
        if (recieved === expected) {
            console.log("test has passed");
            return true;
        }
        else {
            console.log("test has failed");
            console.log(`recieved: ${recieved} expected: ${expected}`)
            return false;
        }
    }
}

function toBeLessThanOREqual(expected) {
    if (recieved === expected) {
        console.log("test has passed");
        return true;
    }
    else {
        console.log("test has failed");
        console.log(`recieved: ${recieved}`);
        return false;
    }
}

function __Equal(exp, rec) {
    let flag = true;
    let expectedLength = Object.keys(exp).length;
    let recievedLength = Object.keys(rec).length;
    if (expectedLength !== recievedLength) {
        return false;
    }
    if (Array.isArray(exp) !== Array.isArray(rec)) {
        return false;
    }
    for (let key in exp) {
        if (typeof exp[key] !== "object" && ) {
            
        }
    }
}