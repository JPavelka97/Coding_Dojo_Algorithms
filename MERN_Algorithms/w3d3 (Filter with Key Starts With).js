/* 
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key
  will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/
const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
];

// Grab searchBY key because it might not be firstname lastname
function filterByKeyStartsWith(items, searchFor, searchBy) {
    let expected = [];
    for (var object = 0; object < items.length; object++) {
        if (searchBy === "firstName") {
            for (i = 0; i < searchFor.length; i++) {
                if (items[object].firstName[i] !== searchFor[i]) {
                    break;
                } else if (i === searchFor.length - 1) {
                    expected.push(items[object]);
                }
            }
        } else if (searchBy === "lastName") {
            for (i = 0; i < searchFor.length; i++) {
                if (items[object].lastName[i] !== searchFor[i]) {
                    break;
                } else if (i === searchFor.length - 1) {
                    expected.push(items[object]);
                }
            }
        }
    }
    return expected;
}

console.log("1=", filterByKeyStartsWith(people, searchFor1, searchBy1));
console.log("2=", filterByKeyStartsWith(people, searchFor2, searchBy2));
console.log("3=", filterByKeyStartsWith(people, searchFor3, searchBy3));
