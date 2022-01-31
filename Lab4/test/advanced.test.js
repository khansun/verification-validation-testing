const calculator = require("../src/advanced");

describe('Modulo', () => {
    var BVAdata = [
        [1, 2, 1],
        [4, 5, 4],
        [3,12,3],
        [4,6,4]
    ]
    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns${calculator.modulo(a,b)}`, () => {
            expect(calculator.modulo(a,b)).toBe(expected);
        }); 
    });
    
    var DTdata = [
        [0, 89,0],
        [-17, -35, -17],
        [65, -12, 5],
        [-78, 24, -6]

    ]


    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns${calculator.modulo(a,b)}`, () => {
            expect(calculator.modulo(a,b)).toBe(expected);
        }); 
    });
});


describe('Pow', () => {
    var BVAdata = [
        [1, 2, 1],
        [2, 3, 8],
        [4,4,256],
        [4,3,64],
        [1,0,1]
    ]
    describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns${calculator.pow(a,b)}`, () => {
            expect(calculator.pow(a,b)).toBe(expected);
        }); 
    });
    
    var DTdata = [
        [0, 89,0],
        [-17, 0, 1],
        [1, -1, 1],
        [-10, 0, 1],
        [0, 0, null],
    ]


    describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns${calculator.pow(a,b)}`, () => {
            expect(calculator.pow(a,b)).toBe(expected);
        }); 
    });
});