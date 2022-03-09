/*
|--------------------------------------------------------------------------
| Cat and Mouse - Easy Version
|--------------------------------------------------------------------------
|
*/

function catMouse(x) {
   return x.length > 5 ? "Escaped!" : "Caught!";
}


function catMouse(x) {
   return /C.{0,3}m/.test(x) ? "Caught!" : "Escaped!"
}


function catMouse(s) {
   return Math.abs(s.indexOf('C') - s.indexOf('m')) > 4 ? 'Escaped!' : 'Caught!';
}


function catMouse(x) {
   return x.match(/\.\.\.\./) ? "Escaped!" : "Caught!"
}


console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C..m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");