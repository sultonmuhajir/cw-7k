/*
|--------------------------------------------------------------------------
| Greet Me
|--------------------------------------------------------------------------
|
*/

function greet(name) {
   return name != undefined ? `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : "";
}


function greet(name) {
   return `Hello ${name.toLowerCase().replace(/^\w/, (val) => val.toUpperCase())}!`;
}


function greet(name) {
   return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
}


console.log(greet("rileY"), "Hello Riley!");
console.log(greet(undefined), "");