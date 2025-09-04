'use strict';

const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require('./index');

describe('sum_to_n — three implementations', () => {
    const impls = [
        { name: 'Gauss formula (O(1))', fn: sum_to_n_a },
        { name: 'Iterative loop (O(n))', fn: sum_to_n_b },
        { name: 'Recursion (O(n), call stack)', fn: sum_to_n_c },
    ];

    impls.forEach(({ name, fn }) => {
        describe(name, () => {
            test('small n (1, 5, 10, 100)', () => {
                expect(fn(1)).toBe(1);
                expect(fn(5)).toBe(15);
                expect(fn(10)).toBe(55);
                expect(fn(100)).toBe(5050);
            });

            test('n = 0 or negative => 0 (by convention)', () => {
                expect(fn(0)).toBe(0);
                expect(fn(-1)).toBe(0);
                expect(fn(-100)).toBe(0);
            });

            test('medium n (performance check)', () => {
                expect(fn(1000)).toBe((1000 * 1001) / 2);
            });
        });
    });
});
