/*
|--------------------------------------------------------------------------
| Form The Minimum
|--------------------------------------------------------------------------
|
*/

function minValue(values) {
   return Number([...new Set(values)].sort((a, b) => a - b).join(""));
}


function minValue(values) {
   return +[...new Set(values)].sort().join``;
}


function minValue(values) {
   return Number(
      values
         .filter((e, i, arr) => arr.indexOf(e) === i)
         .sort()
         .join("")
   );
}


console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
