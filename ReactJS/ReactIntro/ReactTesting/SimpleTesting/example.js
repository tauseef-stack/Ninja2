function test(descriptions, callback) {
    console.log(descriptions);
    callback();
}

function expect(recieved) { //This global recieved is a closure==> no need to take in all th function further,
    function toBe(expected) {
        if (recieved === expected) {
            console.log("Test is Passed");
            return true;
        }
        else {
            console.log(`test has failed, recieved: ${recieved} \n expected: ${expected}`);
            return true;
        }
       
    }

    function toBeLessThanOREqualTo(expected) {
        if (recieved <= expected) {
            console.log("Test is Passed");
            return true;
        }
        else {
            console.log(`test has failed, recieved: ${recieved} \n expected: ${expected}`);
            return true;
        }
    }

    function __toEqual(exp, rec) {
        if (Array.isArray(exp) !== Array.isArray(rec)) {
            return false;
        }
        let lengthofExp = Object.keys(exp).length;
        let lengthofRec = Object.keys(rec).length;
        if (lengthofExp !== lengthofRec) {
            return false;
        }
        for(let key in exp){
            if (exp[key] !== rec[key]) {
                return false;
           }
        }
        return true;
    }

    function toEqual(ecpected) {
        const isEqual = __toEqual(ecpected, recieved);
        if (isEqual) {
            console.log("test has passed")
        }
        else {
            console.log('Test has failed');
        }
    }

    return {toBe,toBeLessThanOREqualTo,toEqual}//closure==>
}




function sum(a, b) {//this is the function for which we are writing test casess.....==>
    return a + b;
}

test("sum of (3,4) shold be 7", function () {
    expect(sum(3,9)).toBe(7);
})

test("sum of (3,4) shold be less than 10", function () {
    expect(sum(3,9)).toBeLessThanOREqualTo(7);
})

test("{} should be equal to {}", function () {
    expect({}).toBe({});
});

test("{a:10} should be equal to {a:10}", function () {
    expect({a:10,b:5,}).toEqual({b:5,a:10,});
});

test("{a:10} should be equal to {a:10}", function () {
    expect({"0":10}).toEqual({"0":10});
});