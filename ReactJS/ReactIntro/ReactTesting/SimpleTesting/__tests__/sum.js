//common js==>
const sum = require("../sum.js");//common;

describe("functionality of sum function", function () {
    test("sum of (3,4) expected to be 7", () => {
        expect(sum(3, 4)).toBe(7);
    })

    test("sum of (2,3) expected to be 7", () => {
        expect(sum(2, 3)).toBe(5);
    })

    test("sum of (5,2) expected to be 7", () => {
        expect(sum(5, 2)).toBe(7);
    })

    
    test("return from Invalid no of Argument", () => {
        expect(sum(2)).toBe("Invalid no arguments");
    })

    test("return from Invalid Argument", () => {
        expect(sum("5", "3")).toBe("Invalid arguments");
    })

})
