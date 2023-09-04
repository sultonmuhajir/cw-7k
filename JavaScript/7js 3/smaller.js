/*
|--------------------------------------------------------------------------
| How many are smaller than me?
|--------------------------------------------------------------------------
|
*/

function smaller(nums) {
   return nums.map((x, i) => nums.slice(i).filter((y) => x > y).length);
}


const smaller = (nums) => nums.map((val, idx) => nums.slice(++idx).filter((v) => v < val).length);


function smaller(n) {
   for (i = 0; i < n.length; i++) {
      c = 0;
      for (j = i + 1; j < n.length; j++) if (n[i] > n[j]) c++;
      n[i] = c;
   }
   return n;
}


console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);