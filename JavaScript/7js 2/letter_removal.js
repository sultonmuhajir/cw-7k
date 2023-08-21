/*
|--------------------------------------------------------------------------
| Simple letter removal
|--------------------------------------------------------------------------
|
*/

function solve(s, k) {
   return [...s]
      .sort()
      .slice(0, k)
      .reduce((pre, val) => pre.replace(val, ""), s);
}


function solve(s, k) {
   const abc = "abcdefghijklmnopqrstuvwxyz";
   for (let i = 0; i < abc.length; i += 1) {
      while (s.includes(abc[i]) && k > 0) {
         s = s.replace(abc[i], "");
         k -= 1;
      }
   }
   return s;
}


function solve(s, k) {
   let r = s.split("").sort().slice(0, k);
   for (let i = 0; i < r.length; i++) s = s.replace(r[i], "");
   return s;
}


console.log(solve("abracadabra", 1), "bracadabra");
console.log(solve("abracadabra", 2), "brcadabra");
console.log(solve("abracadabra", 6), "rcdbr");
console.log(solve("abracadabra", 8), "rdr");
console.log(solve("abracadabra", 50), "");