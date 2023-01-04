/*
|--------------------------------------------------------------------------
| Strong Number (Special Numbers Series #2)
|--------------------------------------------------------------------------
|
*/

function strong(n) {
   let res = 0;
   for (let i = 0; i < String(n).length; i++) {
      let fact = 1;
      for (let j = 2; j <= Number(String(n)[i]); j++) fact *= j;
      res += fact;
   }
   return res == n ? "STRONG!!!!" : "Not Strong !!";
}


function strong(n) {
   function f(a) {
      return Array(a)
         .fill(null)
         .reduce((ac, el, i) => ac * (i + 1), 1);
   }
   return [...(n + "")].map((e) => f(+e)).reduce((ac, el) => ac + el, 0) === n
      ? "STRONG!!!!"
      : "Not Strong !!";
}


function strong(n) {
   return [...("" + n)].reduce((p, c) => p + [...Array(+c)].reduce((p, _, i) => p * ++i, 1), 0) ===
      n
      ? "STRONG!!!!"
      : "Not Strong !!";
}


console.log(strong(145), "STRONG!!!!");
console.log(strong(185), "Not Strong !!");