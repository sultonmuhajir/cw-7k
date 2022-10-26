/*
|--------------------------------------------------------------------------
| All unique
|--------------------------------------------------------------------------
|
*/

function hasUniqueChars(str) {
   return str == [...new Set(str)].join("");
}


function hasUniqueChars(str) {
   return !/(.).*\1/.test(str);
}


function hasUniqueChars(str) {
   return new Set(str).size == str.length;
}


console.log(hasUniqueChars("  nAa"), false);
console.log(hasUniqueChars("abcdef"), true);
console.log(hasUniqueChars("aA"), true);
console.log(hasUniqueChars("++-"), false);