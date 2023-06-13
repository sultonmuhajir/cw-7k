/*
|--------------------------------------------------------------------------
| The Poet And The Pendulum
|--------------------------------------------------------------------------
|
*/

function pendulum(values) {
   let res = [];
   let arr = [];
   values.sort((a, b) => a - b).forEach((x, i) => (i % 2 ? arr : res).push(x));
   return res.reverse().concat(arr);
}


function pendulum(values) {
   let sort = values.slice().sort((a, b) => a - b);
   let parts = { left: [], right: [] };
   for (let i = 0; i < sort.length; i++) parts[i % 2 ? "right" : "left"].push(sort[i]);
   return parts.left.reverse().concat(parts.right);
}


function pendulum(values) {
   return values
      .sort((__, _) => __ - _)
      .filter((__, _) => !(_ % 2))
      .reverse()
      .concat(values.filter((__, _) => _ % 2));
}


console.log(pendulum([4, 10, 9]), [10, 4, 9]);
console.log(pendulum([27, 27, 19, 21, 22, 28, 24]), [28, 27, 22, 19, 21, 24, 27]);
console.log(pendulum([-9, -2, -10, -6]), [-6, -10, -9, -2]);