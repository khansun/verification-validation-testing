const sort = require("../src/3-sorting.js");

describe("selectionSort", () => {
    var BVAdata = [
        [[2,1,4,3], [1,2,3,4]],
        [[],  []],
        [[1],  [1]],
        [[1,2,3,4],  [1,2,3,4]]
    ]
    describe.each(BVAdata)('BVA: selectionSort(%i, %i), Expected: %i', (arr, expected) => {
        test(`returns${sort.selectionSort(arr)}`, () => {
            expect(sort.selectionSort(arr)).toEqual(expected);
        }); 
    });
    
    var DTdata = [
        [[20, -10],  [-10, 20]]
    ]

    describe.each(DTdata)('DT: selectionSort(%i, %i), Expected: %i', (arr, expected) => {
        test(`returns${sort.selectionSort(arr)}`, () => {
            expect(sort.selectionSort(arr)).toEqual(expected);
        }); 
    });
});

