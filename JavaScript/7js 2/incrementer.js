/*
|--------------------------------------------------------------------------
| Incrementer
|--------------------------------------------------------------------------
|
*/

function incrementer(nums) {
   let res = []
   for (let i = 0; i < nums.length; i++) {
      res.push(Number(String(nums[i] + i + 1).slice(-1)))
   }
   return res
}


incrementer = a => a.map((x, i) => (x - ~i) % 10)


function incrementer(num) {
   return num.map((a, i) => (a + i + 1) % 10);
}


console.log(incrementer([1, 2, 3]), [2, 4, 6]);
console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);
console.log(incrementer([]), [4, 8, 2, 2, 4]);