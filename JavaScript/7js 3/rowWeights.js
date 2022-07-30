/*
|--------------------------------------------------------------------------
| Row Weights
|--------------------------------------------------------------------------
|
*/

function rowWeights(array) {
   let res = [0, 0];
   for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? (res[0] += array[i]) : (res[1] += array[i]);
   }
   return res;
}


function rowWeights(array) {
   return array.reduce(
      (t, x, i) => {
         t[i % 2] += x;
         return t;
      },
      [0, 0]
   );
}


function rowWeights(array) {
   let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
   let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);
   return [t1, t2];
}


console.log(rowWeights([80]), [80, 0]);
console.log(rowWeights([100, 50]), [100, 50]);
console.log(rowWeights([50, 60, 70, 80]), [120, 140]);
console.log(rowWeights([13, 27, 49]), [62, 27]);