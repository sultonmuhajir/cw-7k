/*
|--------------------------------------------------------------------------
| Maximum Length Difference
|--------------------------------------------------------------------------
|
*/

function mxdiflg(a1, a2) {
   if (a1.length == 0 || a2.length == 0) return -1;
   let x = a1.map((s) => s.length);
   let y = a2.map((s) => s.length);
   return Math.max(Math.max(...x) - Math.min(...y), Math.max(...y) - Math.min(...x));
}


function mxdiflg(a1, a2) {
   let max = -1;
   for (let A1 of a1) for (let A2 of a2) max = Math.max(max, Math.abs(A1.length - A2.length));
   return max;
}


function mxdiflg(a1, a2) {
   const maxx = (x) => x.map((el) => el.length);
   return a1.length === 0 || a2.length === 0
      ? -1
      : Math.max(
           Math.max(...maxx(a1)) - Math.min(...maxx(a2)),
           Math.max(...maxx(a2)) - Math.min(...maxx(a1))
        );
}


let s1 = [
   "hoqq",
   "bbllkw",
   "oox",
   "ejjuyyy",
   "plmiis",
   "xxxzgpsssa",
   "xxwwkktt",
   "znnnnfqknaz",
   "qqquuhii",
   "dvvvwz",
];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);