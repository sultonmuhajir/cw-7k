/*
|--------------------------------------------------------------------------
| Find twins
|--------------------------------------------------------------------------
|
*/

function elimination(arr) {
   res = 0
   const unq = [...new Set(arr)]
   unq.forEach(i => {
      res += arr.filter(j => j == i).length > 1 ? i : 0
   });
   return res != 0 ? res : null
}


function elimination(arr) {
   return arr.filter((e, i) => i !== arr.lastIndexOf(e))[0] || null;
}


function elimination(arr) {
   return arr.filter(function (el, pos, array) {
      return array.indexOf(el) != pos;
   })[0] || null;
}


function elimination(arr) {
   return arr.sort().find((n, i) => n === arr[i + 1]) || null
}


console.log(elimination([2, 5, 34, 1, 22, 1]), 1);
console.log(elimination([2, 2, 34, 1, 22]), 2);
console.log(elimination([2, 5, 34, 1, 22]), null);