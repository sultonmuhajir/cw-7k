/*
|--------------------------------------------------------------------------
| Digits explosion
|--------------------------------------------------------------------------
|
*/

function explode(s) {
   let res = '';
   for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < Number(s[i]); j++) {
         res += s[i];
      }
   }
   return res;
}


const explode = s => s.replace(/\d/g, d => d.repeat(d));


function explode(s) {
   return s.split("").map((e) => e.repeat(+e)).join("");
}


function explode(s) {
   return s.split('').map(i => ''.padEnd(i, i)).join('')
}


console.log(explode("312"));
console.log(explode("102269"));