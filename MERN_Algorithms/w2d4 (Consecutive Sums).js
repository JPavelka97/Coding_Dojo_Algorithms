/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

const numbers2 = [];
const expected2 = [];

const numbers3 = [1, 3, 7, 9];
const expected3 = [
    { i: 1, n: 3 },
    { i: 2, n: 7 },
    { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @typedef {Array<{i: number, n: number}>} NonConsecutiveNumbers Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecutiveNumbers}
 */
function allNonConsecutive(arr) {
    let consec = [];
    if (arr.length < 2) {
        return consec;
    }
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            consec.push({
                i: i + 1,
                n: arr[i + 1],
            });
        }
    }
    return consec;
}

// console.log(allNonConsecutive(numbers1))
// console.log(allNonConsecutive(numbers2))
// console.log(allNonConsecutive(numbers3))

// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const numbers4 = [2, 5, 3, 6, 7, 23, 12];
const sum4 = 16;
const expected4 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

const numbers5 = [];
const sum5 = 5;
const expected5 = [];

const numbers5_1 = [5];
const sum5_1 = 5;
const expected5_1 = [[5]];

const numbers6 = [10, 15, 20, 35, 30];
const sum6 = 5;
const expected6 = [];

// Bonus:
const numbers7 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum7 = 16;
const expected7 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const numbers8 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum8 = -16;
const expected8 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

function findConsecutiveSums(arr, targetSum) {
    let sum = 0;
    let expected = [];
    for (i = 0; i < arr.length; i++) {
        let j = i;
        let temp = [];
        while (sum < targetSum) {
            temp.push(arr[j]);
            sum += arr[j];
            j++;
        }
        if (sum === targetSum) {
            expected.push(temp);
        }
        temp = [];
        sum = 0;
    }
    return expected;
}

console.log(findConsecutiveSums(numbers4, sum4));
console.log(findConsecutiveSums(numbers5, sum5));
console.log(findConsecutiveSums(numbers5_1, sum5_1));
console.log(findConsecutiveSums(numbers6, sum6));
console.log(findConsecutiveSums(numbers7, sum7));
console.log(findConsecutiveSums(numbers8, sum8));
