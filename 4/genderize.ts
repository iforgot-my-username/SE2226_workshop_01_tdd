import fetch from 'node-fetch'
import GenderizeModel from './genderize_model'

export enum Gender {
    male,
    female,
    unisex
}


export async function fetchGenderize(name: string): Promise<GenderizeModel> {
    const URL = 'https://api.genderize.io/?name='
    return fetch(`${URL}${name}`)
        .then((response) => response.json())

}

export function getGender(genderizeResponse: GenderizeModel): Gender | undefined {
    const { gender, probability } = genderizeResponse;
    if (!gender) {
        return undefined

    } else if (probability >= 0.7) {
        return gender === 'male' ? Gender.male : Gender.female
    }
    return Gender.unisex
}

export default async function genderize(name: string) {
    return fetchGenderize(name)
        .then((resObj) => getGender(resObj))

}