import readWriteMinMax, { readFile, writeFile } from "./min_max_json_file"
describe("min max json file function", () => {
    describe("min max function data read and write to json file", () => {

        it("Can write a json file containing array of numbers and read it", () => {
            const data = [1, 2, 3, 4, 5, 6]
            expect.assertions(1);
            return writeFile("experiment", data)
                .then(() => readFile("experiment"))
                .then((data) => {
                    expect(data).toEqual(data)
                })
        })
    })

    describe("min max from json file and write result to a json file", () => {
        test("read Write Min Max function 3-8", () => {
            expect.assertions(2);
            return writeFile("test1", [5, 8, 4, 7, 3])
                .then(() => readWriteMinMax("test1", "testResult1")
                )
                .then((result) => {
                    expect(result).toBeTruthy()
                })
                .then(() => readFile("testResult1"))
                .then((result) => {
                    expect(result).toEqual([0.4, 1, 0.2, 0.8, 0])
                })
        })
        test("read Write Min Max function 0-8", () => {
            expect.assertions(2);
            return writeFile("test1", [5, 1, 2, 8, 4, 7, 0, 3])
                .then(() => readWriteMinMax("test1", "testResult1")
                )
                .then((result) => {
                    expect(result).toBeTruthy()
                })
                .then(() => readFile("testResult1"))
                .then((result) => {
                    expect(result).toEqual([0.625, 0.125, 0.25, 1, 0.5, 0.875, 0, 0.375])
                })
        })
    })
})