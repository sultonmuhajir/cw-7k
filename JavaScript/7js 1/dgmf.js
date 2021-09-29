/*
|--------------------------------------------------------------------------
| Don't give me five!
|--------------------------------------------------------------------------
|
*/

function dontGiveMeFive(start, end) {
   let res = -1;
   for (let i = start; i <= end; i++) {
      const str = String(i).split('');
      if (str.includes('5')) {
         res += 1;
      }
   }
   return end - start - res;
}


function dontGiveMeFive(start, end) {
   return Array.from(Array(end - start + 1), (e, i) => i + start)
      .filter((e) => ('' + e).indexOf('5') === -1).length;
}


function dontGiveMeFive(start, end) {
   let count = 0
   for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
         count++
      }
   }
   return count
}


dontGiveMeFive = (s, e) => {
   for (let cnt = 0; s <= e; ++s)
      (s + '').includes('5') || cnt++
   return cnt
}


console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);
console.log(dontGiveMeFive(40, 60), 10);