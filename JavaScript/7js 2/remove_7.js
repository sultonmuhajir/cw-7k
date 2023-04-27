/*
|--------------------------------------------------------------------------
| Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
|--------------------------------------------------------------------------
|
*/

function remove(string) {
   return string
      .split(" ")
      .filter((i) => i.split("!").length != 2)
      .join(" ");
}


function remove(s) {
   return s.replace(/((\s|^)!\w+\b(?!!))|((\s|^)\w+!(?!!))/g, "").trim();
}


function remove(string) {
   const str = string.split(" ");
   const result = [];
   for (let i of str) {
      if ((i.match(/!/g) || []).length != 1) {
         result.push(i);
      }
   }
   return result.join(" ");
}


console.log(remove("Hi!"), "");
console.log(remove("Hi! Hi!"), "");
console.log(remove("Hi! Hi! Hi!"), "");
console.log(remove("Hi Hi! Hi!"), "Hi");
console.log(remove("Hi! !Hi Hi!"), "");
console.log(remove("Hi! Hi!! Hi!"), "Hi!!");
console.log(remove("Hi! !Hi! Hi!"), "!Hi!");