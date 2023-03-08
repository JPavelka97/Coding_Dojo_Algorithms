const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function merge(left, right){
    // Take two sorted arrays and combine them together into a new sorted array
    // Use while/for loops to loop through each array
    // Climb up through the indices of each array until you reach the end of that array's length (while loops)
    let mergedArr = []
    let l = 0;
    let r = 0;
    while (l<left.length && r<right.length){
        if(left[l] < right[r]){
            mergedArr.push(left[l++]);
        }
        else{
            mergedArr.push(right[r++]);
        }
    }
    return mergedArr.concat(left.slice(l)).concat(right.slice(r))
}

function mergeSort(arr){
    // Sort array into two halves
    // Recursively call mergeSort as long as the split array has more than one value
    // Base Case: If arr.length =< 1
    let len = arr.length;
    if(len<2) return arr;
    let mid = Math.floor(len/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}
