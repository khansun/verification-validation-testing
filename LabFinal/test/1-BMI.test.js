const bmi = require("../src/1-BMI.js");

describe("calculateBMI", () => {
    var BVAdata = [
        [-1, 100, "Please provide a valid height"],
        [0, 50, "Infinity"],
        [0, 0, "NaN"],
        [0, -1, "Please provide a valid weight"],
        [100, 20, "20.00"]
    ]
    describe.each(BVAdata)('BVA: calculateBMI(%i, %i), Expected: %i', (heightInCM, weightInKG, expected) => {
        test(`returns${bmi.calculateBMI(heightInCM, weightInKG)}`, () => {
            expect(bmi.calculateBMI(heightInCM, weightInKG)).toBe(expected);
        }); 
    });
    
    var DTdata = [
        [170, 60, "20.76"],
        [150, 40, "17.78"]
    ]

    describe.each(DTdata)('DT: calculateBMI(%i, %i), Expected: %i', (heightInCM, weightInKG, expected) => {
        test(`returns${bmi.calculateBMI(heightInCM, weightInKG)}`, () => {
            expect(bmi.calculateBMI(heightInCM, weightInKG)).toBe(expected);
        }); 
    });
});

