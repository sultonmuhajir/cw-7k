/*
|--------------------------------------------------------------------------
| Find all pairs
|--------------------------------------------------------------------------
|
*/

function duplicates(array) {
   return Array.from(new Set(array)).reduce(
      (a, b) => a + Math.floor(array.filter((e) => e == b).length / 2),
      0
   );
}


function duplicates(array) {
   return array.reduce(
      (a, b) => (a[0].delete(b) ? [a[0], ++a[1]] : [a[0].add(b), a[1]]),
      [new Set(), 0]
   )[1];
}


function duplicates(array) {
   return (array.slice``.sort((a, b) => a - b).toString``.match(/\b(\d+),\1\b/g) || []).length;
}


function duplicates(array) {
   return (
      array
         .sort((x, y) => x - y)
         .join("_")
         .match(/(?<=_|^)(\d+)_\1(?=_|$)/g) || []
   ).length;
}


console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]), 3);
console.log(duplicates([]), 0);