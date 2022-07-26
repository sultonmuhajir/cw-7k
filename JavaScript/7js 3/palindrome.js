/*
|--------------------------------------------------------------------------
| Numerical Palindrome #1
|--------------------------------------------------------------------------
|
*/

function palindrome(num) {
   return typeof (num) == 'number' && num >= 0 ? String(num) == String(num).split('').reverse().join('') : "Not valid"
}


function palindrome(num) {
   return Number.isInteger(num) && num >= 0 ? parseInt(`${num}`.split("").reverse().join("")) === num : "Not valid"
}


function palindrome(num) {
   return Number.isInteger(num) && num >= 0 ? [...`${num}`].reverse().join(``) == num : `Not valid`;
}


console.log(palindrome(1221), true);
console.log(palindrome(123322), false);
console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1221"), "Not valid");
console.log(palindrome(-450), "Not valid");