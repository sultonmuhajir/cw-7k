/*
|--------------------------------------------------------------------------
| Debug the functions EASY
|--------------------------------------------------------------------------
|
*/

function multi(arr) {
   return arr.reduce((a, b) => a * b)
}


function add(arr) {
   return arr.reduce((a, b) => a + b)
}


function reverse(str) {
   return str.split('').reverse().join('');
}


console.log(multi([5, 1, 5]), 25);
console.log(add([9, 8, 5]), 22);
console.log(reverse("Hello World"), "dlroW olleH");