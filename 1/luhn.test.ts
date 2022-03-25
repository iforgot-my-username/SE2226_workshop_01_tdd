import isLuhnNum, { splitNums, processDoubleLuhnNums, getSum } from "./luhn";
describe('Luhn algorithm functions', () => {
    describe('getSum function', () => {
        it('works with a 3 element array of numbers', () => {
            expect(getSum([1, 2, 3])).toBe(6);
        });
        it('works with a 6 element array of numbers', () => {
            expect(getSum([1, 2, 3, 4, 5, 6])).toBe(21);
        });
        it('works with array of numbers having negative', () => {
            expect(getSum([1, 2, 3, 4, 5, -6])).toBe(9);
        });
    });


    describe('splitNumber function', () => {
        it('works with 2 didget number', () => {
            expect(splitNums(12)).toEqual([1, 2]);
        });
        it('works with 2 didget number string', () => {
            expect(splitNums('12')).toEqual([1, 2]);
        });
        it('works with 3 didget number', () => {
            expect(splitNums(123)).toEqual([1, 2, 3]);
        });
        it('works with 3 didget number string', () => {
            expect(splitNums('123')).toEqual([1, 2, 3]);
        });
        it('works with 6 didget number', () => {
            expect(splitNums(123456)).toEqual([1, 2, 3, 4, 5, 6]);
        });
        it('works with 6 didget number string', () => {
            expect(splitNums('123456')).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });

    describe('Process Double Luhn Numbers', () => {
        it('works with 2 didget', () => {
            expect(processDoubleLuhnNums([1, 2])).toEqual([1, 4]);
        });
        it('works with 3 didget', () => {
            expect(processDoubleLuhnNums([1, 2, 3])).toEqual([1, 4, 3]);
        });
        it('works with 4 didget', () => {
            expect(processDoubleLuhnNums([1, 9, 3, 1])).toEqual([1, 9, 3, 2]);
        });
        it('works with 11 didget', () => {
            expect(processDoubleLuhnNums([7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3])).toEqual([7, 9, 9, 4, 7, 6, 9, 7, 7, 2, 3]);
        });
    });

    describe('validate Luhn number', () => {
        it('works for 7 didget number string', () => {
            expect(isLuhnNum('79927398713')).toBeTruthy();
        });
        it('works for 7 didget number string', () => {
            expect(isLuhnNum('79927398712')).toBeFalsy();
        });
        it('works for 7 didget number', () => {
            expect(isLuhnNum(79927398713)).toBeTruthy();
        });
        it('works for 7 didget number', () => {
            expect(isLuhnNum(79927398712)).toBeFalsy();
        });
        it('works for 8 didget number', () => {
            expect(isLuhnNum(799273987132)).toBeFalsy();
        });
        it('works for 8 didget number', () => {
            expect(isLuhnNum(799273987111)).toBeTruthy();
        });
    });
});