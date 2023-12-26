/*
|--------------------------------------------------------------------------
| String prefix and suffix
|--------------------------------------------------------------------------
|
*/

function solve(s) {
   let x = 0;
   for (let i = 0; i <= s.length / 2; i++) {
      x = s.substring(0, i) == s.substring(s.length - i) ? i : x;
   }
   return x;
}


function solve(s) {
   return s.match(/^(.*).*\1$/)[1].length;
}


function solve(s, i = s.length >> 1) {
   while (i && s.slice(0, i) != s.slice(-i)) --i;
   return i;
}


console.log(solve("abcd"), 0);
console.log(solve("abcda"), 1);
console.log(solve("abcdabc"), 3);
console.log(solve("abcabc"), 3);
console.log(solve("abcabca"), 1);
console.log(solve("aaaa"), 2);
console.log(solve("aa"), 1);
console.log(solve("a"), 0);