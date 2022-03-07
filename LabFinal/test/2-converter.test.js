const converter = require("../src/2-converter.js");

describe("temperatureConverter", () => {
    var BVAdata = [
        ["F", 32, ["0.00 C", "273.15 K"]],
        ["C", 0, ["32.00 F", "273.15 K"]],
        ["K", 273.15, ["32.00 F", "0.00 C"]],
        ["X", -40, "wrong input"],
        ["K", 0,     ["-459.67 F", "-273.15 C"]]
    ]
    describe.each(BVAdata)('BVA: temperatureConverter(%i, %i), Expected: %i', (measurement, val, expected) => {
        test(`returns${converter.temperatureConverter(measurement, val)}`, () => {
            expect(converter.temperatureConverter(measurement, val)).toEqual(expected);
        }); 
    });
    
    var DTdata = [
        ["F", 98.8,  ["37.11 C", "310.26 K"]],
        ["C", -40,   ["-40.00 F", "233.15 K"]]
    ]

    describe.each(DTdata)('DT: temperatureConverter(%i, %i), Expected: %i', (measurement, val, expected) => {
        test(`returns${converter.temperatureConverter(measurement, val)}`, () => {
            expect(converter.temperatureConverter(measurement, val)).toEqual(expected);
        }); 
    });
});

