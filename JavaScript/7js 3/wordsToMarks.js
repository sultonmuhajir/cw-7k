/*
|--------------------------------------------------------------------------
| Love vs friendship
|--------------------------------------------------------------------------
|
*/

function wordsToMarks(string) {
   const abj = "abcdefghijklmnopqrstuvwxyz".split("");
   let res = 0;
   for (let i = 0; i < string.length; i++) {
      res += abj.indexOf(string[i]) + 1;
   }
   return res;
}


const wordsToMarks = (abc) =>
   [0, ...abc].reduce(($, b) => $ + " abcdefghijklmnopqrstuvwxyz".indexOf(b));


function wordsToMarks(string) {
   return string.split("").reduce((acc, char) => {
      return acc + char.charCodeAt() - 96;
   }, 0);
}


function wordsToMarks(str) {
   const sum = 0;
   for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) - 96;
   return sum;
}


console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);