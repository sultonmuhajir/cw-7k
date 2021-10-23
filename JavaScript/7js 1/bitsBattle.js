/*
|--------------------------------------------------------------------------
| Bits Battle
|--------------------------------------------------------------------------
|
*/

function bitsBattle(numbers) {
   let odd = numbers.filter(i => i % 2 != 0).map(j => j.toString(2)).join('').split('').filter(i => i == '1').length;
   let even = numbers.filter(i => i % 2 == 0).map(j => j.toString(2)).join('').split('').filter(i => i == '0').length;
   return odd > even ? 'odds win' : odd < even ? 'evens win' : 'tie';
}


function bitsBattle(numbers) {
   let r = [0, 0]
   for (let n of numbers) r[n % 2] += n.toString(2).split(n % 2).length - 1
   return r[0] > r[1] ? "evens win" : r[1] > r[0] ? "odds win" : "tie"
}


const bitsBattle = arr => {
   let score = arr.reduce((a, x) => a + (x & 1 ? +1 : -1) * (x && x.toString(2).split(x & 1).length - 1), 0);
   return score > 0 ? "odds win" : score < 0 ? "evens win" : "tie";
}


const bitsBattle = numbers =>
   (val => val ? `${val < 0 ? `odds` : `evens`} win` : `tie`)
   (numbers.reduce((pre, val) => pre + (val & 1 ? -1 : 1) * (val.toString(2).split(val & 1).length - 1), 0));


function bitsBattle(numbers) {
   const odds = (numbers.filter(e => e % 2 != 0).map(e => e.toString(2)).join('').match(/1/g) || []).length;
   const evens = (numbers.filter(e => e % 2 == 0).map(e => e.toString(2)).join('').match(/0/g) || []).length;
   return evens > odds ? 'evens win' : evens == odds ? 'tie' : 'odds win'
}


console.log(bitsBattle([5, 3, 14]), 'odds win');
console.log(bitsBattle([3, 8, 22, 15, 78]), 'evens win');
console.log(bitsBattle([]), 'tie');
console.log(bitsBattle([1, 13, 16]), 'tie');