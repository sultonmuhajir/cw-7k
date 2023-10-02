/*
|--------------------------------------------------------------------------
| Pull your words together, man!
|--------------------------------------------------------------------------
|
*/

function sentencify(words) {
   return words.join(" ")[0].toUpperCase() + words.join(" ").slice(1) + ".";
}


function sentencify(arr) {
   return arr.map((e, i) => (i == 0 ? e[0].toUpperCase() + e.slice(1) : e)).join(" ") + ".";
}


function sentencify(words) {
   return words.join(" ").replace(/^[a-z]/, (m) => m.toUpperCase()) + ".";
}


console.log(sentencify(["yes"]), "Yes.");
console.log(sentencify(["let", "there", "be", "light"]), "Let there be light.");
console.log(sentencify(["extra", "stuff\"''", "stays"]), "Extra stuff\"'' stays.");