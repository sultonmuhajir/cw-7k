/*
|--------------------------------------------------------------------------
| Filter the number
|--------------------------------------------------------------------------
|
*/

function FilterString(value) {
   let res = [];
   for (let i = 0; i < value.length; i++) {
      const num = Number(value[i]);
      if (num / 1 == num) {
         res.push(num);
      }
   }
   return Number(res.join(""));
}


const FilterString = v => Number(v.replace(/\D/g, ''));


function FilterString(value) {
   return +value.split('').filter(n => !isNaN(n)).join('');
}


console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');