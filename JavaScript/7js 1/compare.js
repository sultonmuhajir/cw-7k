/*
|--------------------------------------------------------------------------
| Compare Strings by Sum of Chars
|--------------------------------------------------------------------------
|
*/

function compare(s1, s2) {
   const res = (s) =>
      !s || /[^a-z]/i.test(s)
         ? 0
         : s.split("").reduce((a, b) => a + b[0].toUpperCase().charCodeAt(), 0);
   return res(s1) == res(s2);
}


function compare(s1, s2) {
   if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
      return (
         s1
            .split("")
            .map((n) => n.toUpperCase().charCodeAt())
            .reduce((a, b) => a + b) ===
         s2
            .split("")
            .map((n) => n.toUpperCase().charCodeAt())
            .reduce((a, b) => a + b)
      );
   return true;
}


function compare(s1, s2) {
   function sum(s) {
      let a = (s || "").toUpperCase().split("");
      return a.every((v) => /[A-Z]/.test(v)) ? a.reduce((r, v) => r + v.codePointAt(0), 0) : 0;
   }
   return sum(s1) === sum(s2);
}


console.log(compare("AD", "BC"), true);
console.log(compare("AD", "DD"), false);
console.log(compare("gf", "FG"), true);
console.log(compare("zz1", ""), true);