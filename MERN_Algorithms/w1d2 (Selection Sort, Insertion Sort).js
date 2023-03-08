/* 
https://visualgo.net/en/sorting
    
Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values
are sorted.
Unstable sort.

1. Iterate through the list, finding the index of the min value
2. swap the min value with the beginning of the list
3. iterate through the list again, this time skipping the first index
4. continue until array is sorted

Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
Space: O(1) constant.
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
    you run selection sort for 10 iterations only to display the first 10
    sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums = []) {
    for(let i = 0; i<nums.length; i++){
        let minIndex = i;
        for( let j = minIndex + 1; j < nums.length; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j
                }
            }
            let temp = nums[minIndex]
            nums[minIndex] = nums[i]
            nums[i] = temp;
    }
    return nums;
}

function insertionSort(nums = []) {
    for (let i = 1; i < nums.length; i++) {
        let currIdx = i; // 1. so we don't accidentally change i, 2. easier to read
        let leftIdx = currIdx - 1 //compare the current value to the left

        while (leftIdx >= 0 && nums[leftIdx] > nums[currIdx]) {
            // 1. don't go to -1 index
            // 2.  compare the value at leftIdx to currIdx
            // if true, then we need to swap to the left
            
            // destructure swap notation
            [nums[leftIdx], nums[currIdx]] = [nums[currIdx], nums[leftIdx]]

            //  temp notation
            // let temp = nums[currIdx];
            // nums[currIdx] = nums[leftIdx]
            // nums[leftIdx] = temp

            // currIdx was swaped to the left, so we move currIdx to the left
            currIdx--;
            leftIdx = currIdx - 1;
        }
    }

    return nums
}