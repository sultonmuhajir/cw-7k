/*
|--------------------------------------------------------------------------
| Minimum Steps (Array Series #6)
|--------------------------------------------------------------------------
|
*/

function minimumSteps(numbers, value) {
   const arr = numbers.sort((a, b) => a - b);
   res = 0, c = -1;
   arr.forEach(i => {
      if (res < value) {
         res += i;
         c += 1;
      }
   });
   return c;
}


function minimumSteps(numbers, value) {
   return numbers.sort((a, b) => a - b).filter(e => (value = value - e) > 0).length;
}


function minimumSteps(numbers, value) {
   const nums = numbers.sort((a, b) => a - b);
   for (let i = 0, sum = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum >= value) {
         return i;
      }
   }
}


function minimumSteps(numbers, value) {
   let min = numbers.sort((a, b) => a - b);
   let i = 0;
   let result = min[i];
   while (result < value)
      result += min[++i];
   return i;
}


console.log(minimumSteps([4, 6, 3], 7), 1);
console.log(minimumSteps([10, 9, 9, 8], 17), 1);
console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3);
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
console.log(minimumSteps([4, 6, 3], 2), 0);