/*
|--------------------------------------------------------------------------
| Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
|--------------------------------------------------------------------------
|
*/

function remove(string) {
   return string.replace(/!+(?!!*$)/g, "");
}


function remove(str) {
   let last = str.length - 1;
   while (str[last] === "!") last--;
   return [...str].filter((e) => e !== "!").join("") + str.slice(last + 1);
}


function remove(s) {
   return s.replace(/!+([^!])/g, "$1");
}


console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!!!");
console.log(remove("!Hi"), "Hi");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
console.log(remove("Hi"), "Hi");