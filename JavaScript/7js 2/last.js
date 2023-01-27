/*
|--------------------------------------------------------------------------
| Sort by Last Char
|--------------------------------------------------------------------------
|
*/

function last(x) {
   return x.split(" ").sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}


function last(x) {
   return x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}


function last(x) {
   return x.split(" ").sort((a, b) => a.slice(-1) > b.slice(-1));
}


console.log(last("man i need a taxi up to ubud"), [
   "a",
   "need",
   "ubud",
   "i",
   "taxi",
   "man",
   "to",
   "up",
]);