/*
|--------------------------------------------------------------------------
| Tidy Number (Special Numbers Series #9)
|--------------------------------------------------------------------------
|
*/

function tidyNumber(n) {
   return String(n).split('').join('') == String(n).split('').sort((a, b) => a - b).join('');
}


function tidyNumber(n) {
   return [...n += ""].sort().join `` == n
}


function tidyNumber(n) {
   let s = n.toString();
   for (let i = 0; i < s.length - 1; i++) {
      if (s[i] > s[i + 1]) return false;
   }
   return true;
}


function tidyNumber(n) {
   let m = 9;
   while (n) {
      if (n % 10 > m)
         return false;
      m = n % 10;
      n = n / 10 | 0;
   }
   return true;
}


console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);