/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function rFact(num){

    //Truncate the input in case it is a decimal
    num = Math.floor(num)
    
    //Set variables
    result = num
    x = num-1

    //Base Case (A way to break out of the recursion)
    if(x < 1){
        return 1
    }

    //Re-run the function descending down to rFact(1) 
    //The base case will break us out at rFact(0)
    return result = result * rFact(x)
}

console.log(rFact(num1))
console.log(rFact(num2))
console.log(rFact(num3))










// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return