/*
|--------------------------------------------------------------------------
| Automorphic Number (Special Numbers Series #6)
|--------------------------------------------------------------------------
|
*/

function automorphic(n) {
   return n == String(n ** 2).slice(-String(n).length) ? "Automorphic" : "Not!!";
}


function automorphic(n) {
   return `${n ** 2}`.endsWith(n) ? `Automorphic` : `Not!!`;
}


function automorphic(n) {
   return RegExp(`${n}$`).test(n ** 2) ? "Automorphic" : "Not!!";
}


function automorphic(n) {
   return Math.pow(n, 2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}


console.log(automorphic(6), "Automorphic");
console.log(automorphic(9), "Not!!");
console.log(automorphic(76), "Automorphic");
console.log(automorphic(95), "Not!!");
console.log(automorphic(625), "Automorphic");
console.log(automorphic(225), "Not!!");