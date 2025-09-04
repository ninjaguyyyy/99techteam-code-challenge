'use strict';

/**
 * Problem:
 * Calculate S(n) = 1 + 2 + ... + n
 * Assumptions:
 * - n is an integer.
 * - The result will always be less than Number.MAX_SAFE_INTEGER (as stated).
 */

/**
 * METHOD 1 — GAUSS FORMULA
 * Idea:
 *   S(n) = n * (n + 1) / 2
 * Complexity:
 *   Time: O(1), Space: O(1) — the fastest method.
 */
function sum_to_n_a(n) {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
}

/**
 * METHOD 2 — ITERATIVE LOOP
 * Idea:
 *   Loop from 1 to n and accumulate the sum.
 * Complexity:
 *   Time: O(n), Space: O(1).
 */
function sum_to_n_b(n) {
    if (n <= 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * METHOD 3 — RECURSION
 * Idea:
 *   Use recursion: S(n) = n + S(n-1)
 * Complexity:
 *   Time: O(n), Space: O(n).
 */
function sum_to_n_c(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
}

module.exports = { sum_to_n_a, sum_to_n_b, sum_to_n_c };
