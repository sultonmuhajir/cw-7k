/*
|--------------------------------------------------------------------------
| Growth of a Population
|--------------------------------------------------------------------------
|
*/

function nbYear(p0, percent, aug, p) {
   percent = percent / 100;
   let px = p0;
   let nb = 1;
   for (let i = p0 + 1; i < p; i++) {
      let pn = px + Math.floor(px * percent) + aug;
      if (i % pn == 0) {
         nb += 1;
         px = i;
      }
   }
   return nb;
}


function nbYear(p0, percent, aug, p) {
   for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
   return y;
}


function nbYear(p0, percent, aug, p) {
   var count = 0;
   while (p0 < p) {
      p0 += p0 * percent / 100 + aug;
      count++;
   }
   return count;
}


console.log(nbYear(1000, 2, 50, 1150), 3);
console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);