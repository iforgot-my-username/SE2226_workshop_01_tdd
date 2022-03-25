import toRomanNumerals from "./to_roman_numerals";

describe('Number to Roman numeral', () => {
    it('Works with numbers below 4', () => {
        expect(toRomanNumerals(3)).toBe('III');
    });
    it('Works with numbers 4', () => {
        expect(toRomanNumerals(4)).toBe('IV');
    });
    it('Works with numbers above 5', () => {
        expect(toRomanNumerals(4)).toBe('IV');
    });
    it('Works with numbers below 9', () => {
        expect(toRomanNumerals(6)).toBe('VI');
    })
    it('Works with n;umber 9', () => {
        expect(toRomanNumerals(9)).toBe('IX');
    });
    it('Works with numbers below 14', () => {
        expect(toRomanNumerals(13)).toBe('XIII');
    });
    it('Works with number below 0', () => {
        expect(toRomanNumerals(0)).toBeUndefined();
    });
    it('Works with numbers 999', () => {
        expect(toRomanNumerals(999)).toBe('CMXCIX');
    });
    it('Works with numbers 4444', () => {
        expect(toRomanNumerals(4444)).toBe('MMMMCDXLIV');
    });
    it('Works with number 4999', () => {
        expect(toRomanNumerals(4999)).toBe('MMMMCMXCIX');
    });
});