/*
|--------------------------------------------------------------------------
| Nothing special
|--------------------------------------------------------------------------
|
*/

function nothingSpecial(str) {
   return typeof str !== "string" ? "Not a string!" : str.replace(/[^a-zA-Z0-9\s]/g, "");
}


const nothingSpecial = (str) =>
   typeof str !== "string" ? "Not a string!" : str.replace(/[^\w\d\s]|(_)/g, "");


function nothingSpecial(str) {
   return typeof str == "string" ? str.match(/[a-z0-9 \t\n]/gi)?.join("") || "" : "Not a string!";
}


console.log(nothingSpecial("Hello World!"), "Hello World");
console.log(nothingSpecial("%^Take le$ft ##quad%r&a&nt"), "Take left quadrant");
console.log(nothingSpecial("M$$$$$$$y ally!!!!!"), "My ally");
console.log(nothingSpecial(25), "Not a string!");