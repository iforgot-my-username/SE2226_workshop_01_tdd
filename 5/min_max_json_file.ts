import fs from 'fs';
import scale from '../3/number_3';

export async function writeFile(fileName: string, nums: number[]) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${fileName}.json`, JSON.stringify(nums), (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}

export async function readFile(fileName: string): Promise<number[]> {
    return new Promise((resolve, reject) => {
        fs.readFile(`${fileName}.json`, 'utf8', (err, data) => {
            if (data) {
                resolve(JSON.parse(data))
            } else {
                reject(err)
            }
        })
    })
}

export default async function readWriteMinMax(dataFileName: string, resultFileName: string) {
    return readFile(dataFileName)
        .then((data) => scale(data))
        .then((scaledData) => {
            writeFile(resultFileName, scaledData)
        }).then(() => true)
        .catch((err) => err)
}
