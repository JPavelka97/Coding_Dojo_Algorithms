/* 
  Given in an alumni interview
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 

  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

//   counter
// temp 
//         i-1  str[i] i+1
//             V
// ['a', 'a', 'a', 'a', 'b', 'b', 'c']

// freqObj = {
//     'a' : 1, ++
// }




const str1 = "aaaabbcddd";
const expected1 = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

// RIOT   Read Input Output Talk
// pseudo code here:
// ....

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
    var count=1
    var new_str = ""
    for (i=0; i<str.length; i++){
        if (str[i] == str[i+1]){
            count++
        }
        if(str[i] != str[i+1]){
            if(count == 1){
                new_str += str[i]
            }
            else {
                new_str += str[i]+count
                count = 1
            }
        }
    }
    if (new_str.length == str.length){
        console.log(str)
        return str
    }
    else
    {
        console.log(new_str)
    }
}

encodeStr(str4)