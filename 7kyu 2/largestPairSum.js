function largestPairSum(numbers) {
   const sort = numbers.sort((a, b) => b - a);
   return sort[0] + sort[1];
}


function largestPairSum(numbers) {
   return numbers.sort((a, b) => b - a).slice(0, 2).reduce((acc, curr) => acc + curr);
}


function largestPairSum(numbers) {
   return numbers.sort(function (x, y) {
      return y > x
   }).shift() + numbers.shift();
}


console.log(largestPairSum([10, 14, 2, 23, 19]), 42, "Sum should be 42");
console.log(largestPairSum([-100, -29, -24, -19, 19]), 0, "Sum should be 0");
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10, "Sum should be 10");
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18, "Sum should be -18");