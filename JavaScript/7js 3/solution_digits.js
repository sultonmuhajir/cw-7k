/*
|--------------------------------------------------------------------------
| Largest 5 digit number in a series
|--------------------------------------------------------------------------
|
*/

function solution(digits) {
   let res = 0;
   for (let i = 0; i <= digits.length - 5; i++) {
      res = Math.max(res, digits.slice(i, i + 5));
   }
   return res;
}


function solution(digits) {
   return [...digits].reduce((pre, _, idx) => Math.max(pre, digits.slice(idx, idx + 5)));
}


function solution(digits) {
   let res = [];
   for (let i = 0; i < digits.length; i++) {
      res.push(+digits.slice(i, i + 5));
   }
   return Math.max(...res);
}


console.log(solution("1234567898765"), 98765);
console.log(solution("731674765"), 74765);