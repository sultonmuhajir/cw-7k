/*
|--------------------------------------------------------------------------
| Alphabet symmetry
|--------------------------------------------------------------------------
|
*/

function solve(arr) {
   const abj = "abcdefghijklmnopqrstuvwxyz".split("");
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
         if (arr[i][j].toLowerCase() == abj[j]) count += 1;
      }
      res.push(count);
   }
   return res;
}


function solve(arr) {
   return arr.map((x) =>
      [...x.toLowerCase()].reduce((s, v, i) => s + (v.charCodeAt() == i + 97), 0)
   );
}


function solve(arr) {
   return arr.map(
      (s) =>
         s
            .toUpperCase()
            .split("")
            .filter((c, i) => c.charCodeAt() - "A".charCodeAt() === i).length
   );
}


console.log(solve(["abode", "ABc", "xyzD"]), [4, 3, 1]);
console.log(solve(["abide", "ABc", "xyz"]), [4, 3, 0]);
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]), [6, 5, 7]);
console.log(solve(["encode", "abc", "xyzD", "ABmD"]), [1, 3, 1, 3]);