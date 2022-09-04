/*
|--------------------------------------------------------------------------
| esreveR
|--------------------------------------------------------------------------
|
*/

function reverse(array, res = []) {
   for (let i = array.length - 1; i >= 0; i--) res.push(array[i]);
   return res;
}


function reverse(array) {
   return array.reduce((pre, val) => [val, ...pre], []);
}


function reverse(array) {
   return array.map((c, i) => array[array.length - 1 - i]);
}


function reverse(array) {
   return array.reduce(function (a, b) {
      return [b].concat(a);
   }, []);
}


console.log(reverse([1, 2, 3]), [3, 2, 1]);
console.log(reverse([1, null, 14, "two"]), ["two", 14, null, 1]);