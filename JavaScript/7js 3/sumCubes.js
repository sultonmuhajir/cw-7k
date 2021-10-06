/*
|--------------------------------------------------------------------------
| Sum of Cubes
|--------------------------------------------------------------------------
|
*/

function sumCubes(n) {
   let res = 0
   for (let i = 1; i <= n; i++) {
      res += i ** 3;
   }
   return res;
}


const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);
const sumCubes = n => (n * ++n / 2) ** 2;


function sumCubes(n) {
   return (n * (n + 1) / 2) ** 2;
}


function sumCubes(n) {
   return n === 1 ? 1 : Math.pow(n, 3) + sumCubes(n - 1);
}


console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);