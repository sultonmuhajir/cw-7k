/*
|--------------------------------------------------------------------------
| Balanced Number (Special Numbers Series #1 )
|--------------------------------------------------------------------------
|
*/

function balancedNum(number) {
   const x = Math.ceil(String(number).length / 2 - 1);
   if (x < 1) {
      return "Balanced";
   } else {
      const rvs = String(number).split("").reverse().join("");
      let res = 0;
      for (let i = 0; i < x; i++) {
         res += Number(String(number)[i]) - Number(rvs[i]);
      }
      return res == 0 ? "Balanced" : "Not Balanced";
   }
}


function balancedNum(n) {
   return [...(n + "")].reduce(
      (a, v, i, r) => (i < r.length / 2 - 1 ? +v + a - r[r.length - 1 - i] : a),
      0
   )
      ? "Not Balanced"
      : "Balanced";
}


function balancedNum(number) {
   var str = `${number}`;
   return Array.from(
      { length: (str.length - 1) / 2 },
      (_, i) => str[i] - str[str.length - 1 - i]
   ).reduce((p, c) => p + c, 0) == 0
      ? "Balanced"
      : "Not Balanced";
}


console.log(balancedNum(7), "Balanced");
console.log(balancedNum(959), "Balanced");
console.log(balancedNum(13), "Balanced");
console.log(balancedNum(1230987), "Not Balanced");
console.log(balancedNum(56239814), "Balanced");