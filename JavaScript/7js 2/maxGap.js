/*
|--------------------------------------------------------------------------
| Maximum Gap (Array Series #4)
|--------------------------------------------------------------------------
|
*/

function maxGap(numbers) {
   let res = [];
   const sort = numbers.sort((a, b) => a - b);
   for (let i = 1; i < sort.length; i++) {
      res.push(sort[i] - sort[i - 1]);
   }
   return Math.max(...res);
}


function maxGap(numbers) {
   return Math.max(
      ...numbers
         .sort((a, b) => a - b)
         .slice(1)
         .map((val, idx) => val - numbers[idx])
   );
}


function maxGap(numbers) {
   return numbers
      .sort((a, b) => a - b)
      .reduce((gap, curr, ind, arr) => (gap < arr[ind + 1] - curr ? arr[ind + 1] - curr : gap), 0);
}


console.log(maxGap([13, 10, 2, 9, 5]), 4);
console.log(maxGap([13, 3, 5]), 8);
console.log(maxGap([24, 299, 131, 14, 26, 25]), 168);