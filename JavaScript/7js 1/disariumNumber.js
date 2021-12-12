/*
|--------------------------------------------------------------------------
| Disarium Number (Special Numbers Series #3)
|--------------------------------------------------------------------------
|
*/

function disariumNumber(n) {
   const str = String(n);
   let res = 0;
   for (let i = 0; i < str.length; i++) {
      res += Number(str[i]) ** (i + 1)
   }
   return res == n ? "Disarium !!" : "Not !!";
}


function disariumNumber(n) {
   return n == n.toString().split("").reduce((a, b, i) => a + Math.pow(b, i + 1), 0) ? "Disarium !!" : "Not !!";
}


function disariumNumber(n) {
   return (
      [...num + ''].reduce(
         (acc, n, i) => acc + Math.pow(n, i + 1), 0
      ) === num ? 'Disarium' : 'Not'
   ) + ' !!';
}


function disariumNumber(n) {
   return [...`${n}`].map((el, i) => el ** (i + 1)).reduce((a, b) => a + b) === n ? 'Disarium !!' : 'Not !!'
}


console.log(disariumNumber(89), "Disarium !!");
console.log(disariumNumber(564), "Not !!");
console.log(disariumNumber(1024), "Not !!");
console.log(disariumNumber(135), "Disarium !!");
console.log(disariumNumber(136586), "Not !!");