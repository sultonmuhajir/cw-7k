/*
|--------------------------------------------------------------------------
| Check three and two
|--------------------------------------------------------------------------
|
*/

function checkThreeAndTwo(array) {
   if ([...new Set(array)].length == 2) {
      let len = array.filter(i => i == [...new Set(array)][0]).length
      return len == 2 || len == 3;
   } else {
      return false;
   }
}


function checkThreeAndTwo(array) {
   let [a, b, c, d, e] = [...array].sort();
   return a !== e && ((a === b && c === e) || (a === c && d === e));
}


function checkThreeAndTwo(array) {
   let i, counts = {
      "a": 0,
      "b": 0,
      "c": 0
   }
   for (i = 0; i < 5; i++)
      counts[array[i]]++;
   return counts["a"] ** 2 + counts["b"] ** 2 + counts["c"] ** 2 == 13;
}


function checkThreeAndTwo(array) {
   return [2, 3].includes(array.filter(val => val === array[0]).length) && new Set(array).size === 2;
}


console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false);