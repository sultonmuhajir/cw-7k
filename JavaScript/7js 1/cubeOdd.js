/*
|--------------------------------------------------------------------------
| Sum of Odd Cubed Numbers
|--------------------------------------------------------------------------
|
*/

function cubeOdd(arr) {
   if (arr.filter(i => i / 1 == i).length != arr.length) {
      return undefined
   } else {
      const x = arr.filter(i => i % 2 != 0).map(i => i ** 3)
      return x.length != 0 ? x.reduce((a, b) => a + b) : 0;
   }
}


const cubeOdd = arr => arr.some(x => +x !== x) ? undefined : arr.filter(x => x % 2 != 0).reduce((s, x) => s + x ** 3, 0);
const cubeOdd = a => a.every(e => e === +e) ? a.reduce((r, e) => r + ((e = e ** 3) % 2 ? e : 0), 0) : undefined;


function cubeOdd(arr) {
   arr = arr.filter((num) => {
      return num % 2 != 0
   });
   arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
   return isNaN(arr) ? undefined : arr;
}


function cubeOdd(arr) {
   let isNumeric = a.every(x => !isNaN(x))
   return isNumeric ? a.filter(n => n % 2).reduce((s, n) => s + (n * n * n), 0) : undefined
}


console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);
console.log(cubeOdd([]), undefined);
console.log(cubeOdd([2, 4]), undefined);