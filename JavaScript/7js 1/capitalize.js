/*
|--------------------------------------------------------------------------
| Alternate capitalization
|--------------------------------------------------------------------------
|
*/

function capitalize(s) {
   const arr = s.split("");
   return [
      arr.map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v.toLowerCase())).join(""),
      arr.map((v, i) => (i % 2 != 0 ? v.toUpperCase() : v.toLowerCase())).join(""),
   ];
}


function capitalize(s) {
   return [0, 1].map((r) => [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join(""));
}


function capitalize(s) {
   return [...s].reduce(
      (pre, val, idx) => ((pre[idx % 2] += val.toUpperCase()), (pre[+!(idx % 2)] += val), pre),
      [``, ``]
   );
}


console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
console.log(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
console.log(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"]);