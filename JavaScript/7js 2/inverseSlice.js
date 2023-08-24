/*
|--------------------------------------------------------------------------
| Thinkful - List and Loop Drills: Inverse Slicer
|--------------------------------------------------------------------------
|
*/

function inverseSlice(items, a, b) {
   return [...items.slice(0, a), ...items.slice(b, items.length)];
}


function inverseSlice(q, a, b) {
   q.splice(a, b - a);
   return q;
}


function inverseSlice(a, m, n) {
   return a.slice(0, m).concat(a.slice(n));
}


console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
console.log(
   inverseSlice(
      ["Intuition", "is", "a", "poor", "guide", "when", "facing", "probabilistic", "evidence"],
      5,
      13
   ),
   ["Intuition", "is", "a", "poor", "guide"]
);