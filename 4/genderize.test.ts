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
            }, 70
            )).toBeUndefined()
        })
        it('works for male, default posibility cutoff', () => {
            expect(getGender({
                name: "sam",
                gender: "male",
                probability: 0.81,
                count: 96261
            }, 70
            )).toBe(Gender.male)
        })
        it('works for unisex, default posibility cutoff', () => {
            expect(getGender({
                name: "blue",
                gender: "male",
                probability: 0.65,
                count: 6756
            }, 70
            )).toBe(Gender.unisex)
        })
        it('works for male 60% posibility cutoff', () => {
            expect(getGender({
                name: "blue",
                gender: "male",
                probability: 0.65,
                count: 6756
            }, 60
            )).toBe(Gender.male)
        })
        it('works for female 50% posibility cutoff', () => {
            expect(getGender({
                name: "gin",
                gender: "female",
                probability: 0.53,
                count: 1547
            }, 50
            )).toBe(Gender.female)
        })
        it('works for unisex 90% posibility cutoff', () => {
            expect(getGender({
                name: "sam",
                gender: "male",
                probability: 0.81,
                count: 96261
            }, 90
            )).toBe(Gender.unisex)
        })
        it('works for female, default posibility cutoff', () => {
            expect(getGender({
                name: "maria",
                gender: "female",
                probability: 0.98,
                count: 334287
            }, 70
            )).toBe(Gender.female)
        })
        it('works for unisex, default posibility cutoff', () => {
            expect(getGender({
                name: "gin",
                gender: "female",
                probability: 0.53,
                count: 1547
            }, 70
            )).toBe(Gender.unisex)
        })
    })


    describe("genderize", () => {
        test('Genderize male name: John, default posibility cutoff', () => {
            expect.assertions(1);
            return genderize('john')
                .then((data) => {
                    expect(data).toBe(Gender.male)
                })
        })
        test('Genderize Invaild name, default posibility cutoff', () => {
            expect.assertions(1);
            return genderize('sdkfjadskgjewrewrwe')
                .then((data) => {
                    expect(data).toBeUndefined()
                })
        })
        test('Genderize name: Blue, default posibility cutoff = unisex', () => {
            expect.assertions(1);
            return genderize('blue')
                .then((data) => {
                    expect(data).toBe(Gender.unisex)
                })
        })
        test('Genderize name: Blue, 60% posibility cutoff', () => {
            expect.assertions(1);
            return genderize('blue', 60)
                .then((data) => {
                    expect(data).toBe(Gender.male)
                })
        })
        test('Genderize female name: Maria, default posibility cutoff', () => {
            expect.assertions(1);
            return genderize('maria')
                .then((data) => {
                    expect(data).toBe(Gender.female)
                })
        })
        test('Genderize name: Gin, default posibility  cutoff= unisex', () => {
            expect.assertions(1);
            return genderize('gin')
                .then((data) => {
                    expect(data).toBe(Gender.unisex)
                })
        })
        test('Genderize name: Gin, 50% posibility cutoff', () => {
            expect.assertions(1);
            return genderize('gin', 50)
                .then((data) => {
                    expect(data).toBe(Gender.female)
                })
        })
        test('Genderize female name: Maria, 90% posibility cutoff', () => {
            expect.assertions(1);
            return genderize('sam', 90)
                .then((data) => {
                    expect(data).toBe(Gender.unisex)
                })
        })
    })
})