/*
|--------------------------------------------------------------------------
| Simple string reversal
|--------------------------------------------------------------------------
|
*/

function solve(str) {
   let x = str.split(" ").join("").split("").reverse();
   str.split("").map((v, i) => {
      if (v == " ") x.splice(i, 0, " ");
   });
   return x.join("");
}


function solve(str) {
   let arr = [...str].filter((x) => x != " ");
   return str.replace(/\S/g, (_) => arr.pop());
}


function solve(str) {
   let s = "";
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] != " ") s += str[i];
      if (str[s.length] == " ") s += str[s.length];
   }
   return s;
}


console.log(solve("codewars"), "srawedoc");
console.log(solve("your code"), "edoc ruoy");
console.log(solve("your code rocks"), "skco redo cruoy");
console.log(solve("i love codewars"), "s rawe docevoli");