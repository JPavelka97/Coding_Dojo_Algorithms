var arr2d = [ 
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7] 
];
    
// // We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// // the first index `0` will select the `[2, 5, 8]` sub-array
// // the second index `2` will select the `8` out of that sub-array

//isPresent2d
// function isPresent2d(arr2d, value) {
//     for (var row = 0; row < arr2d.length; row++) {
//         for (var col = 0; col < arr2d[row].length; col++) {
//             if(arr2d[row][col] == value){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// results = isPresent2d(arr2d, 8);
// console.log(results);



// // complete the following function
function flatten(arr2d) {
    var flat = [];

    for (var row = 0; row < arr2d.length; row++){
        for (var col = 0; col < arr2d[row].length; col++){
            flat.push(arr2d[row][col]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

