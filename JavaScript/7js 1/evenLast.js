/*
|--------------------------------------------------------------------------
| Evens times last
|--------------------------------------------------------------------------
|
*/

function evenLast(numbers) {
   if (numbers.length < 1) {
      return 0;
   } else {
      let res = 0;
      for (let i in numbers) {
         if (i % 2 == 0) {
            res += numbers[i];
         }
      }
      return res * numbers.pop();
   }
}


const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0


const evenLast = numbers => {
   const even = numbers.filter((a, i) => i % 2 == 0);
   return even.reduce((acc, val) => val * numbers[numbers.length - 1] + acc, 0);
}


console.log(evenLast([2, 3, 4, 5]), 30)
console.log(evenLast([]), 0)