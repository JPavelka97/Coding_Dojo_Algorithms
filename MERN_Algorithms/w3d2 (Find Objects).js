/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria4 = {
    firstName: "Bob",
    age: 31,
};
const expected4 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria5 = {
    lastName: "Smith",
};
const expected5 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjects(criteria, collection) {
    let expected = [];
    for (i = 0; i < collection.length; i++) {
        if (
            (!criteria.firstName ||
                items[i].firstName === criteria.firstName) &&
            (!criteria.lastName || items[i].lastName === criteria.lastName) &&
            (!criteria.age || items[i].age === criteria.age)
        ) {
            expected.push(items[i]);
        }
    }
    return expected;
}

console.log(findObjects(searchCriteria4, items));
console.log(findObjects(searchCriteria5, items));

// function findObjectsFunctional(criteria, collection) {

// }
