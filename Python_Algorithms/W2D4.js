/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/*
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return

function rotateString(str, amt){
    var newString = ""
    if(int>str.length){
        int = int-str.length
    }
    for(i=0;i<amt;i++){
        newString = str[str.length-i-1] + newString
    }
    for(i=0;i<str.length-amt;i++){
        newString = newString + str[i]
    }
    console.log(newString)
    return newString
}

rotateString(str,rotateAmnt2)