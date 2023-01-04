/*
|--------------------------------------------------------------------------
| Word values
|--------------------------------------------------------------------------
|
*/

function wordValue(a) {
   let res = [];
   for (let i = 0; i < a.length; i++) {
      x = a[i].replace(/ /g, "");
      count = 0;
      for (let j = 0; j < x.length; j++) {
         count += x[j].charCodeAt(0) - 96;
      }
      res.push(count * (i + 1));
   }
   return res;
}


function wordValue(a) {
   return a.map((s, i) => (i + 1) * [...s].reduce((a, c) => a + (c.charCodeAt(0) % 32), 0));
}


function wordValue(a) {
   return a.map(
      (s, i) =>
         (i + 1) * s.split``.reduce((s, n) => s + 1 + "abcdefghijklmnopqrstuvwxyz".indexOf(n), 0)
   );
}


console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);