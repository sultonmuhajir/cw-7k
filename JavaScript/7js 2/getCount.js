/*
|--------------------------------------------------------------------------
| Vowel Count
|--------------------------------------------------------------------------
|
*/

const getCount = str => str.split("").filter(i => i == "a" || i == "i" || i == "u" || i == "e" || i == "o").length;


function getCount(str) {
   return str.split("").filter(i => i == "a" || i == "i" || i == "u" || i == "e" || i == "o").length;
}


function getCount(str) {
   return str.replace(/[^aeiou]/gi, '').length;
}


function getCount(str) {
   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


console.log(getCount("abracadabra"), 5)