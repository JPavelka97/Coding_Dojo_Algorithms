const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function swap(nums=[],left=0,right=nums.length-1){
    temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
}

function partition(nums = [], left = 0, right = nums.length - 1) {
    const midIdx = Math.floor((left + right) / 2);
    const pivotValue = nums[midIdx];
    const tempPivotIdx = right;
    swap(nums,nums[midIdx],nums[tempPivotIdx],)
    console.log(nums)
    }

partition(nums1)