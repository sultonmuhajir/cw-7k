/*
|--------------------------------------------------------------------------
| Array comparator
|--------------------------------------------------------------------------
|
*/

function matchArrays(v, r) {
   return v.filter((i) => r.includes(i)).length;
}


function matchArrays(v, r) {
   let res = 0;
   for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < r.length; j++) {
         v[i] == r[j] && res++;
      }
   }
   return res;
}


function matchArrays(v, r) {
   return v.reduce((a, c) => a + r.includes(c), 0);
}


console.log(matchArrays(["Perl", "Closure", "JavaScript"], ["Go", "C++", "Erlang"]), 0);
console.log(
   matchArrays(["incapsulation", "OOP", "array"], ["time", "propert", "paralelism", "OOP"]),
   1
);
console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]), 4);