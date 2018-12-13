var calc = require("../src/calc");

describe("Calculator Spec", function() {
    it("Will add two given number", function() {
        var x = calc.add(10, 20);
        expect(x).toBe(30);
    });
});