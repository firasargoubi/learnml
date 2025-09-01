import { batch, range } from '.';

describe('Utility functions', () => {
    test('Range function', () => {
        expect(range(3)).toEqual([0, 1, 2]);
    });

    describe('batch function', () => {
        test('Array below batch size', () => {
            expect(batch([1, 2], 3)).toEqual([[1, 2]]);
        });

        test('Array at batch size', () => {
            expect(batch([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
        });

        test('Array above batch size', () => {
            expect(batch([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
        });
    });
});
