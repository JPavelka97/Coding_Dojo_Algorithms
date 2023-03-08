/* 
  Given a string,
  return a new string with the duplicates excluded
  //Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

/* pseudocode here
create an empty string
create a for loop over the original string
.hasown if statement at position i is in expected, don't push it, otherwise push element into new array
print/return new string
*/

// create the function and decide what params it needs and what it will return

function noDoubles(string){
    var newString = ""
    for(i=0;i<string.length;i++){
        if(newString.includes(string[i])){
            continue
        }
        else{
            newString += string[i]
        }
    }
    console.log(newString)
}

noDoubles(str4)