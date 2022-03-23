/*
|--------------------------------------------------------------------------
| Spacify
|--------------------------------------------------------------------------
|
*/

function spacify(str) {
   return str.split('').join(' ')
}


function spacify(str) {
   return [...str].join(' ');
}


function spacify(str) {
   return str.replace(/(.)(?!$)/g, "$1 ")
}


function spacify(str) {
   return Array.from(str).join(' ');
}


console.log(spacify('hello world'), 'h e l l o   w o r l d');
console.log(spacify('12345'), '1 2 3 4 5');