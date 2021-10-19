/*
|--------------------------------------------------------------------------
| Simple Fun #176: Reverse Letter
|--------------------------------------------------------------------------
|
*/

function reverseLetter(str) {
   return str.split('').filter(i => i.match(/^[a-z]+$/)).reverse().join('')
}


const reverseLetter = (s) => s.replace(/[^a-z]/gi, '').split('').reverse().join('');
const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');


function reverseLetter(str) {
   return str.match(/[a-z]/ig).reverse().join('');
}


function reverseLetter(str) {
   return str.split('').reverse().filter(function (el) {
      if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
         return el;
      }
   }).join('');
}


function reverseLetter(str) {
   return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}


console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")