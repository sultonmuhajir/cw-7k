/*
|--------------------------------------------------------------------------
| Genetic Algorithm Series - #1 Generate
|--------------------------------------------------------------------------
|
*/

function generate(length) {
   let res = "";
   for (let i = 0; i < length; i++) res += Math.round(Math.random());
   return res;
}


function generate(length) {
   return [...Array(length)].map((val) => (Math.random() * 2) ^ 0).join(``);
}


function generate(length) {
   return Array.from(Array(length), (x) => Math.floor(Math.random() * 2)).join("");
}


console.log(generate(16), 16);
console.log(generate(32), 32);
console.log(generate(64), 64);