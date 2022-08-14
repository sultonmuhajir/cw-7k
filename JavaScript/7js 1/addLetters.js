/*
|--------------------------------------------------------------------------
| Alphabetical Addition
|--------------------------------------------------------------------------
|
*/

function addLetters(...letters) {
   const abj = "zabcdefghijklmnopqrstuvwxyz";
   let res = 0;
   for (let i = 0; i < letters.length; i++) {
      res += abj.indexOf(letters[i]);
   }
   return abj[res % 26];
}


function addLetters(...letters) {
   return String.fromCharCode(
      ((letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26) + 97
   );
}


function addLetters(...letters) {
   const alphabet = "abcdefghijklmnopqrstuvwxyz";
   return letters.length
      ? alphabet[
           (letters.map((item) => alphabet.indexOf(item) + 1).reduce((prev, curr) => prev + curr) -
              1) %
              26
        ]
      : "z";
}


console.log(addLetters("a", "b", "c"), "f");
console.log(addLetters("y", "c", "b"), "d");
console.log(addLetters(), "z");