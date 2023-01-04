/*
|--------------------------------------------------------------------------
| MinMinMax
|--------------------------------------------------------------------------
|
*/

function minMinMax(array) {
   let smallest = Math.min(...array)
   let largest = Math.max(...array)
   let minimumAbsent = 0;
   for (let i = smallest; i <= largest; i++) {
      if (array.includes(i) == false) {
         minimumAbsent += i
         break
      }
   }
   return [smallest, minimumAbsent, largest]
}


const minMinMax = a => (b => [b[0], b.find((e, i) => b[i + 1] > e + 1) + 1, b[b.length - 1]])(a.sort((a, b) => a - b))


function minMinMax(arr) {
   let max = Math.max(...arr);
   let min = Math.min(...arr);
   for (let i = min; i < max; i++) {
      if (!arr.includes(i)) return [min, i, max];
   }
}


function minMinMax(array) {
   let min = Math.min(...array);
   while (array.includes(min)) min++;
   return [Math.min(...array), min, Math.max(...array)];
}


console.log(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24]);
console.log(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8]);
console.log(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9]);