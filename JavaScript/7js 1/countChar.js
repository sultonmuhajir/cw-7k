/*
|--------------------------------------------------------------------------
| Count the Characters
|--------------------------------------------------------------------------
|
*/

function countChar(string, char) {
   return string.toLowerCase().split('').filter(i => i == char.toLowerCase()).length
}


function countChar(string, char) {
   return (string.match(new RegExp(char, 'ig')) || []).length
}


function countChar(s, c) {
   return s.split(new RegExp(c, "i")).length - 1
}


function countChar(s, c) {
   return eval(`(s.match(/${c}/gi)||[]).length`);
}


console.log(countChar("fizzbuzz", "z"), 4);