/*
|--------------------------------------------------------------------------
| Odd Ones Out!
|--------------------------------------------------------------------------
|
*/

function oddOnesOut(nums) {
   return nums.filter((x) => nums.filter((y) => y == x).length % 2 == 0);
}


const oddOnesOut = (a) => a.filter((b) => !(a.filter((c) => c == b).length % 2));


function oddOnesOut(nums) {
   let res = [];
   for (let i = 0; i < nums.length; ++i) {
      let count = 0;
      for (let j = 0; j < nums.length; ++j) if (nums[i] == nums[j]) count++;
      if (count % 2 == 0) res.push(nums[i]);
   }
   return res;
}


console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);