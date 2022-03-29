describe("other test methods", () => {
    it("checking 2 empty objects", () => {  
        expect({}).toEqual({});
    });
    it("checking 2 empty objects", () => {
        expect([]).not.toEqual({});
    });
    it("checking 2 empty objects", () => {
        expect([1]).not.toEqual({"0":1});
    });
});