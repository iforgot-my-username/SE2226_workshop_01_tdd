export function getSum(arrayNums: number[]) {
    return arrayNums.reduce((total, current) => total + current);
}

export function splitNums(num: number | string) {
    return String(num).split('').map(Number);
}

export function processDoubleLuhnNums(nums: number[]) {
    return nums.map((num, i) => {
        if (i % 2 !== 0) {
            const numDouble = num * 2;
            if (numDouble > 9) {
                return getSum(splitNums(numDouble));
            }
            return numDouble;
        }
        return num;
    });
}


export default function isLuhnNum(nums: number | string) {
    const newNums = processDoubleLuhnNums(splitNums(nums));
    return getSum(newNums) % 10 === 0;
}
