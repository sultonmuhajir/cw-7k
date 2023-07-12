/*
|--------------------------------------------------------------------------
| Exclamation marks series #8: Move all exclamation marks to the end of the sentence
|--------------------------------------------------------------------------
|
*/

function remove(s) {
   return s.replace(/!/g, "") + s.replace(/[^!]/g, "");
}


function remove(s) {
   let x = s.split("").filter((el) => el === "!");
   let y = s.split("").filter((el) => el !== "!");
   return y.join("") + x.join("");
}


function remove(s) {
   return s.replace(/\!/g, "") + "!".repeat((s.match(/\!/g) || []).length);
}


console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!!");
console.log(remove("Hi! Hi! Hi!"), "Hi Hi Hi!!!");
console.log(remove("Hi! !Hi Hi!"), "Hi Hi Hi!!!");
console.log(remove("Hi! Hi!! Hi!"), "Hi Hi Hi!!!!");