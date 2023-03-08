/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

/* 
low, high, and mid all refer to indeces of nums
Establish variables low = 0 and high = arr.length-1
Establish a while loop (while low<=high)
    Inside of the while loop, find mid = Math.floor[(high + low)/2]
    Check if mid = searchNum, if so return true
    IF searchNum>mid, low = mid+1
    ELSE IF searchNum<mid, high = mid-1
    ELSE IF low>high
        return false
*/

function binarySearch(arr, search) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (arr[mid] == search) {
            return true;
        } 
        else if (search < arr[mid]) {
            high = mid - 1;
        } 
        else if (search > arr[mid]) {
            low = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
