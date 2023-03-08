/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 0, 2];
const expected3 = 2;

function balanceIndex(arr){
    sumleft = 0
    sumright = 0
    for(i=0;i<arr.length;i++){
        sumright += arr[i]
    }
    for(i=0;i<arr.length;i++){
        sumright -= arr[i]
        if(sumleft==sumright){
            return i
        }
        sumleft += arr[i]
    }
    return -1
}

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return
console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))