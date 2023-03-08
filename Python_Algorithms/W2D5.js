/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];




// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create a for loop to loop through array of newinv, pulling the key ('name')
//     if element from newinv is in currinv, update quantity and add element to expected
//     else, if element from newinv is not in currinv, and new element to expected

function update(newInv,currInv){
    var coolBool = false
    for(var elementNew of newInv){
        for(var elementCurr of currInv){
            if(elementNew['name'] == elementCurr['name']){
                elementCurr['quantity'] += elementNew['quantity']
                coolBool = true
                break
            }
        }
        if(coolBool == false){
            currInv.push(elementNew)
        }
        else {
            coolBool = false
        }
    }
    console.log(currInv)
}

update(newInv1,currInv1)
update(newInv2,currInv2)
update(newInv3,currInv3)

// create the function and decide what params it needs and what it will return