var sapui5 = require("../src/sapui5");

describe("SAPUI5 Spec", function() {
    
    it("will load SAPUI5 control (sap.m.Button) and assert its value", function() {
        var x = sapui5.getSAPUI5Control();
        expect(x.getText()).toBe("Test");
    });
});