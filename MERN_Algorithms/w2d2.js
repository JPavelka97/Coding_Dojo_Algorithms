/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.

    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

function orderedMultisetUnion(sortedA, sortedB) {
    let expected = [];
    let i = 0;
    let j = 0;

    while (i < sortedA.length && j < sortedB.length) {
        if (sortedA[i] === sortedB[j]) {
            expected.push(sortedA[i]);
            i++;
            j++;
        } else if (sortedA[i] < sortedB[j]) {
            expected.push(sortedA[i]);
            i++;
        } else if (sortedA[i] > sortedB[j]) {
            expected.push(sortedB[j]);
            j++;
        }
    }

    while (i < sortedA.length) {
        expected.push(sortedA[i]);
        i++;
    }

    while (j < sortedB.length) {
        expected.push(sortedB[j]);
        j++;
    }

    return expected;
}

console.log(orderedMultisetUnion(nums1A, nums1B));
console.log(orderedMultisetUnion(nums2A, nums2B));
console.log(orderedMultisetUnion(nums3A, nums3B));
console.log(orderedMultisetUnion(nums4A, nums4B));
console.log(orderedMultisetUnion(nums5A, nums5B));
