/*
|--------------------------------------------------------------------------
| Is every value in the array an array?
|--------------------------------------------------------------------------
|
*/

function arrCheck(value) {
   return value.filter((i) => Array.isArray(i)).length == value.length;
}


function arrCheck(value) {
   return value.every(Array.isArray);
}


function arrCheck(arr) {
   return !arr.some((x) => !Array.isArray(x));
}


console.log(arrCheck([]), true);
console.log(arrCheck([["string"]]), true);
console.log(arrCheck([[], {}]), false);
console.log(arrCheck([[1], [2], [3]]), true);
console.log(arrCheck(["A", "R", "R", "A", "Y"]), false);