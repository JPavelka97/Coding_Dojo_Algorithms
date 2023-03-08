/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  Bob: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

function frequency(arr){
    var newDict = {}
    for(i=0; i<arr.length; i++){
        if(newDict[arr[i]] == undefined){
            newDict[arr[i]] = 1
        }
        else{
            newDict[arr[i]] += 1
        }
    }
    console.log(newDict)
    return newDict
}

frequency(arr3)



/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expect1 = 1;

const nums2 = [5, 4, 5];
const expect2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expect3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expect4 = 1;

function numbers(arr){
    var newDict = {}
    for(i=0; i<arr.length; i++){
        if(newDict[arr[i]] == undefined){
            newDict[arr[i]] = 1
        }
        else{
            newDict[arr[i]] += 1
        }
    }
    for(key in newDict){
        if(newDict[key] % 2 == 1){
            return key
        }
    }
}

console.log(numbers(nums2))