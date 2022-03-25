import scale, { findMinMax } from './number_3'


describe('Min and Max number the scale', () => {
    describe('find min and max numbers', () => {
        it('works for numbers 3-8', () => {
            expect(findMinMax([5, 8, 4, 7, 3]))
                .toEqual({ min: 3, max: 8 });
        });
        it('works for numbers 0-8', () => {
            expect(findMinMax([5, 1, 2, 8, 4, 7, 0, 3]))
                .toEqual({ min: 0, max: 8 });
        });
        it('works for numbers -1-8', () => {
            expect(findMinMax([5, 1, 2, 8, 4, 7, 0, 3, -1]))
                .toEqual({ min: -1, max: 8 });
        });

    });
    describe('Scale using formula', () => {
        it('works for numbers 3-8', () => {
            expect(scale([5, 8, 4, 7, 3]))
                .toEqual([0.4, 1, 0.2, 0.8, 0]);
        });
        it('works for numbers 0-8', () => {
            expect(scale([5, 1, 2, 8, 4, 7, 0, 3]))
                .toEqual([0.625, 0.125, 0.25, 1, 0.5, 0.875, 0, 0.375]);
        });
    });
});