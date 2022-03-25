import genderize, { getGender, fetchGenderize, Gender } from './genderize'

describe('genderize.io', () => {
    describe('useGenderize function', () => {
        test('genderize.io data for the name: kim', () => {
            // expect.assertions(1);
            return fetchGenderize('kim')
                .then((data) => {
                    expect(data).toEqual({
                        name: "kim",
                        gender: "female",
                        probability: 0.56,
                        count: 51609
                    })
                })
        })
        test('genderize.io data for the name: Juan', () => {
            expect.assertions(1);
            return fetchGenderize('juan')
                .then((data) => {
                    expect(data).toEqual({
                        name: "juan",
                        gender: "male",
                        probability: 0.98,
                        count: 274814
                    })
                })
        })
        test('genderize.io data for the name: Paul', () => {
            return fetchGenderize('paul')
                .then((data) => {
                    expect(data).toEqual({
                        name: "paul",
                        gender: "male",
                        probability: 0.99,
                        count: 148099
                    })
                })
        })
        test('genderize.io data for the name: Rovie', () => {
            return fetchGenderize('rovie')
                .then((data) => {
                    expect(data).toEqual({
                        name: "rovie",
                        gender: "female",
                        probability: 0.81,
                        count: 62
                    })
                })
        })
    })

    describe('getGender function', () => {
        it('works for invaild name', () => {
            expect(getGender({
                name: "sdkfjadskgjewrewrwe",
                gender: null,
                probability: 0,
                count: 0
            }
            )).toBeUndefined()
        })
        it('works for male', () => {
            expect(getGender({
                name: "sam",
                gender: "male",
                probability: 0.81,
                count: 96261
            }
            )).toBe(Gender.male)
        })
        it('works for unisex', () => {
            expect(getGender({
                name: "blue",
                gender: "male",
                probability: 0.65,
                count: 6756
            }
            )).toBe(Gender.unisex)
        })
        it('works for female', () => {
            expect(getGender({
                name: "maria",
                gender: "female",
                probability: 0.98,
                count: 334287
            }
            )).toBe(Gender.female)
        })
        it('works for unisex', () => {
            expect(getGender({
                name: "gin",
                gender: "female",
                probability: 0.53,
                count: 1547
            }
            )).toBe(Gender.unisex)
        })
    })


    describe("genderize", () => {
        test('Genderize male name: John', () => {
            expect.assertions(1);
            return genderize('john')
                .then((data) => {
                    expect(data).toBe(Gender.male)
                })
        })
        test('Genderize Invaild name', () => {
            expect.assertions(1);
            return genderize('sdkfjadskgjewrewrwe')
                .then((data) => {
                    expect(data).toBeUndefined()
                })
        })
        test('Genderize unisex(male) name: Blue', () => {
            expect.assertions(1);
            return genderize('blue')
                .then((data) => {
                    expect(data).toBe(Gender.unisex)
                })
        })
        test('Genderize female name: Maria', () => {
            expect.assertions(1);
            return genderize('maria')
                .then((data) => {
                    expect(data).toBe(Gender.female)
                })
        })
        test('Genderize unisex(female) name: Gin', () => {
            expect.assertions(1);
            return genderize('gin')
                .then((data) => {
                    expect(data).toBe(Gender.unisex)
                })
        })
    })
})