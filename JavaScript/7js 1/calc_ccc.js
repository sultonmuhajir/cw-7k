/*
|--------------------------------------------------------------------------
| Char Code Calculation
|--------------------------------------------------------------------------
|
*/

function calc(x) {
   let res = "";
   for (let i = 0; i < x.length; i++) res += String(x[i].charCodeAt());
   return res.split("").filter((i) => i == "7").length * 6;
}


function calc(x) {
   return x.replace(/./g, (val) => val.charCodeAt()).replace(/[^7]/g, ``).length * 6;
}


function calc(x) {
   return (
      x
         .split("")
         .map((c) => c.charCodeAt(0))
         .join("")
         .split("")
         .map(Number)
         .filter((x) => x === 7).length * 6
   );
}


console.log(calc("abcdef"), 6);
console.log(calc("ifkhchlhfd"), 6);
console.log(calc("aaaaaddddr"), 30);
console.log(calc("jfmgklf8hglbe"), 6);
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 96);