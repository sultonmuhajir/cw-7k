/*
|--------------------------------------------------------------------------
| Sum of a sequence
|--------------------------------------------------------------------------
|
*/

function sequenceSum(begin, end, step) {
   res = 0;
   for (let i = begin; i <= end; i += step) {
      res += i;
   }
   return res;
}


const sequenceSum = (begin, end, step) => {
   let n = Math.floor((end - begin) / step + 1);
   return n <= 0 ? 0 : n * (begin + (begin + (n - 1) * step)) / 2;
};


const sequenceSum = (begin, end, step) => {
   return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};


const sequenceSum = (a, b, c) => (
   k => (k + 1) * (2 * a + c * k) / 2
)(a > b ? -1 : (b - a) / c | 0);


console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)