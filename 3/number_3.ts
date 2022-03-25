interface MinMaxNums {
    min: undefined | number
    max: undefined | number
}


export function findMinMax(array: number[]) {
    return array.reduce((previous: MinMaxNums, current) => {
        if (previous.min === undefined || previous.max === undefined) {
            return { min: current, max: current };
        }

        return ({ min: Math.min(previous.min, current), max: Math.max(previous.max, current) });
    }, { min: undefined, max: undefined });
}


export default function scale(array: number[]) {
    const result = findMinMax(array);

    return array.map((x) => (
        (x - result.min!) / (result.max! - result.min!)
    ))
}


