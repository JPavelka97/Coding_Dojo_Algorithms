// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    let hash = {}
    let expected = ''
    let j=0
    for (i in str) {
        while(j<str.length){
            
        }
        if (!hash.hasOwnProperty(str[i])){
            hash[str[i]] = 1
            expected += str[i]
            if(expected.length > length){
                length = expected.length
            }
        }
        else {
            hash = {}
            expected = ''
        }
    }
    console.log(length)
}

lengthOfLongestSubString(str1)
lengthOfLongestSubString(str2)
lengthOfLongestSubString(str3)
lengthOfLongestSubString(str4)
