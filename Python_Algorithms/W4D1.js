/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;


function sumArr(nums, x=nums.length - 1) {
    if(x<0){
        return 0
    }
    return nums[x] + sumArr(nums, x-1)
}

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return