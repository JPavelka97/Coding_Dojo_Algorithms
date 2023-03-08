/* 
        Parens Valid
        Given an str that has parenthesis in it
        return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.
//                  v
const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.
//                v
const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

function closeParenthesisPls(str){
    var count_open = 0
    var count_close = 0

    //This for loop counts the amount of parenthesis, then checks if at any point the closing parenthesis exceeds the open parenthesis
    for(i=0;i<str.length;i++){
        if(str[i]=="("){
            count_open++
        }
        else if(str[i]==")"){
            count_close++
        }

        if(count_open<count_close){
            return false
        }
    }

    //This if statement checks if the parenthesis have an equal amount
    if(count_open==count_close){
        return true
    }
    else{
        return false
    }
}

console.log(closeParenthesisPls(str1))
console.log(closeParenthesisPls(str2))
console.log(closeParenthesisPls(str3))
console.log(closeParenthesisPls(str4))
console.log(closeParenthesisPls("(()(())))"))