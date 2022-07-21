/*
|--------------------------------------------------------------------------
| Fix string case
|--------------------------------------------------------------------------
|
*/

function solve(s) {
   return [...s].map((i) => i == i.toLowerCase()).filter((i) => i == true).length < s.length / 2
      ? s.toUpperCase()
      : s.toLowerCase();
}


function solve(s) {
   return s.replace(/[A-Z]/g, "").length < s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}


function solve(s) {
   return [...s].reduce((t, c) => t + /[a-z]/.test(c) * 2, 0) < s.length
      ? s.toUpperCase()
      : s.toLowerCase();
}


console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");