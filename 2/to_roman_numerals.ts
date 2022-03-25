export default function toRomanNumerals(num: number) {
    if (num < 1 || num > 4999) {
        return undefined;
    };
    const V: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };

    const bits = String(num).split('');
    const length = bits.length - 1;

    return bits.map((e, i) => {
        const bit = Number(e);
        const placeValue = 10 ** (length - i)

        if (bit <= 0) {
            return '';
        } else if (bit < 4 || placeValue === 1000) {
            return V[placeValue].repeat(bit);
        } else if (bit >= 4 && bit <= 5 || bit === 9) {
            return V[bit * placeValue];
        } else {
            return `${V[5 * placeValue]}${V[placeValue].repeat(bit - 5)}`;
        }

    }).join('');
};