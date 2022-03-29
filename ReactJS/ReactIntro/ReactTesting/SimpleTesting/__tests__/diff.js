const diff = require("../diff.js");

describe("diff Function behaviour", () => {
    test("diff of (4,3) to be 1", () => {
        expect(diff(4, 3)).toBe(1)
    })
    test("diff of (5,3) to be 1", () => {
        expect(diff(5, 3)).toBe(2)
    })
    test("diff of (5,0) to be 1", () => {
        expect(diff(5, 0)).toBe(5)
    })
    test("diff of (3,4) to be 1", () => {
        expect(diff(3, 4)).toBe(-1)
    })
    test("diff of (-1.0,-2.0) to be -1", () => {
        expect(diff(-1.0, -2.0)).toBe(1.0)
    })
    test("checking for No of Arguments", () => {
        expect(diff(2)).toBe("Invalid no argumments")
    })
    test("checking type of arguments", () => {
        expect(diff("5", 3)).toBe("Invalid type of argumnets")
    });
    test("Does Diff Functionis Define", () => {
        expect(diff()).toBeDefined()
    })
    it("shoud give 15", () => {
        expect(diff(20, 5)).toBe(15);
    })
    it("shoud give 15", () => {
        expect(diff(500, 485)).toBe(15);
    })
});