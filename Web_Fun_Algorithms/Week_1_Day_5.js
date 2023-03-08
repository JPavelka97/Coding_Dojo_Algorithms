// Write a function reverse( arr ) to reverse an array, if we were given...
// ["a","b","c","d","e"]
// We expect to get back
// ["e","d","c","b","a"]

function reverse(arr) {
    for (var i=0; i<(arr.length/2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1]; 
        arr[arr.length-i-1] = temp;
    }
    console.log(arr)
}

var reversearr = reverse( ["a","b","c","d","e","f","g"] );