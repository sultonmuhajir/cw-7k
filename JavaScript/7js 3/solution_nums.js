/*
|--------------------------------------------------------------------------
| Sort Numbers
|--------------------------------------------------------------------------
|
*/

function solution(nums) {
   return nums === null ? [] : nums.sort((a, b) => a - b);
}


function solution(nums) {
   if (nums === null || nums === []) {
      return []
   }
   let j = 0;
   while (j < nums.length) {
      for (let i = 0; i < nums.length; i++) {
         if (nums[i] > nums[i + 1]) {
            let temp = nums[i + 1];
            nums[i + 1] = nums[i];
            nums[i] = temp
         }
      }
      j++
   }
   return nums
}


function solution(nums) {
   return (nums || []).sort(function (a, b) {
      return a - b
   });
}


console.log(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10])
console.log(solution(null), [])
console.log(solution([]), [])
console.log(solution([20, 2, 10]), [2, 10, 20])
console.log(solution([2, 20, 10]), [2, 10, 20])