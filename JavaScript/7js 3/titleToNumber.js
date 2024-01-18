/*
|--------------------------------------------------------------------------
| Excel sheet column numbers
|--------------------------------------------------------------------------
|
*/

function titleToNumber(title) {
   let res = 0;
   for (let i = 0; i < title.length; i++) {
      res = res * 26 + (title.charCodeAt(i) - "A".charCodeAt(0) + 1);
   }
   return res;
}


function titleToNumber(title) {
   return [...title].reduce((a, b) => a * 26 + b.charCodeAt() - 64, 0);
}


function titleToNumber(title) {
   return title.split("").reduce((p, c) => p * 26 + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c) + 1, 0);
}


console.log(titleToNumber("A"), 1);
console.log(titleToNumber("Z"), 26);
console.log(titleToNumber("AA"), 27);
console.log(titleToNumber("AZ"), 52);
console.log(titleToNumber("BA"), 53);
console.log(titleToNumber("CODEWARS"), 28779382963);