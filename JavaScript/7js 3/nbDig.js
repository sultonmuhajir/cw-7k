/*
|--------------------------------------------------------------------------
| Count the Digit
|--------------------------------------------------------------------------
|
*/

function nbDig(n, d) {
   let res = 0
   for (let i = 0; i <= n; i++) {
      res += String(i ** 2).split('').filter(i => i == String(d)).length;
   }
   return res
}


const nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i)
   .join('')
   .match(new RegExp(d, 'g'))
   .length;


function nbDig(n, d) {
   let o = '';
   for (let i = 0; i <= n; i++) {
      o += Math.pow(i, 2);
   }
   return o.split(d).length - 1
}


const nbDig = (n, d) => {
   let re = new RegExp(d, 'g');
   return Array(...Array(n + 1))
      .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
}


console.log(nbDig(5750, 0), 4700)
console.log(nbDig(11011, 2), 9481)
console.log(nbDig(12224, 8), 7733)
console.log(nbDig(11549, 1), 11905)